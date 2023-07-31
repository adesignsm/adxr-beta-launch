import React, { useLayoutEffect, useRef } from "react";
import "./Entry.css";
import $ from "jquery";
import "jquery-ui-bundle";

import * as THREE from "three";
import {
  EffectComposer,
  Bloom,
  Noise,
  Glitch,
} from "@react-three/postprocessing";
import { GlitchMode } from "postprocessing";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
} from "@react-three/drei";

import LOGO_MODEL from "../../Assets/Models/toposphere.glb";
import Introduction from "../Introduction";

const Entry = () => {
    const handleMouseDown = () => {
      $("#introduction").animate({opacity: "1"}, 700);
      
      if (window.innerWidth >= 690) {
        $("#logo-canvas").animate({ left: "25vw" }, 2500);
      }

      $("#switch-theme").show();

      if (window.innerWidth < 690) {
        let targetPosition = $("#introduction").prop("scrollHeight");
        
        $('html, body').animate({
          scrollTop: targetPosition + 50
        }, 2000);
      }

      document.getElementById("back-to-top-button").classList.replace("flip-down", "flip-up")
    }

  const Model = () => {
    const model = useGLTF(LOGO_MODEL);
    const modelRef = useRef();

    useFrame(() => {
      modelRef.current.rotation.y -= 0.002;
    });

    useLayoutEffect(() => {
      model.nodes.Plane.visible = false;
      model.nodes.sphere.material.wireframe = false;
      model.nodes.sphere.material.depthWrite = true;
      model.nodes.sphere.material.depthTest = true;

      const box = new THREE.Box3().setFromObject(modelRef.current);
      const center = box.getCenter(new THREE.Vector3());

      modelRef.current.position.set(-center.x, -center.y - 1, -center.z);

      $("#switch-theme").hide();
      
      setTimeout(() => {
        $("#logo-canvas canvas").animate({
            backgroundColor: "--background-secondary",
        });

        $("#logo-canvas").delay(1000);
        $("#switch-theme").on("click", function () {
            setTimeout(() => {
                $(".switch-theme").show();
              }, 100);
          });
      }, 4000);
    }, [model]);

    return (
      <group ref={modelRef} onClick={handleMouseDown}>
        <primitive object={model.scene} scale={1.5} onLoad={$("#back-to-top-button").delay(500).fadeIn()}/>
      </group>
    );
};

return (
    <>
      <Canvas id="logo-canvas" camera={{ position: [0, 0, 5] }}>
        <Model />
        <pointLight color="white" intensity={5} position={[0, 5, 0]} />
        <pointLight color="white" intensity={5} position={[0, -5, 0]} />
        <OrbitControls enableZoom={false} enablePan={false}/>
        <EffectComposer>
          <Bloom luminanceThreshold={1.0} luminanceSmoothing={1.0} />
          <Noise opacity={1} />
          <Glitch duration={[0.1, 0.5]} mode={GlitchMode.SPORADIC} ratio={0.5} dtSize={10} />
        </EffectComposer>
      </Canvas>
      <Introduction />
    </>
  );
};

export default Entry;

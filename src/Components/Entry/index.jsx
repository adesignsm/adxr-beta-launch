import React, { useEffect, useLayoutEffect, useRef } from "react";
import "./Entry.css";
import $ from "jquery";

import * as THREE from "three";
import { EffectComposer, Bloom, Noise, Glitch } from "@react-three/postprocessing";
import { GlitchMode } from "postprocessing";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, DeviceOrientationControls } from "@react-three/drei";

import LOGO_MODEL from "../../Assets/Models/toposphere.glb";
import Introduction from "../Introduction";

const Entry = () => {
  const deviceOrientationRef = useRef();

  useEffect(() => {
    window.ondeviceorientation = () => {
      alert("hit");
    }
  })

  const handleMouseDown = () => {
      $("#introduction").show();
      
      if (window.innerWidth >= 690) {
        $("#logo-canvas").animate({ left: "25vw" }, 2500);
      }

      $("#switch-theme").show();

      if (window.innerWidth < 690) {
        let targetPosition = $('#introduction').offset().top - 25;
        
        $('html, body').animate({
          scrollTop: targetPosition
        }, 1000);
      }
  }

  const Model = () => {
    const model = useGLTF(LOGO_MODEL);
    const modelRef = useRef();
    const { camera } = useThree();

    useFrame(() => {
      deviceOrientationRef.current.update();

      let deviceOrientationY = deviceOrientationRef.current.euler.y;
        
      camera.rotation.set(0, 0, 0);
      modelRef.current.rotation.y = deviceOrientationY;

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
      $("#introduction").hide();
      
      setTimeout(() => {
        $("#logo-canvas canvas").animate({
            backgroundColor: "--background-secondary",
        });

        $("#logo-canvas").delay(1000);
        $("#switch-theme").on("click", function () {
            setTimeout(() => {
                $(".introduction").show();
                $(".switch-theme").show();
              }, 100);
          });
      }, 4000);
    }, [model]);

    return (
      <group ref={modelRef} onClick={handleMouseDown}>
        <primitive object={model.scene} scale={1.5} />
      </group>
    );
};

return (
    <>
      <Canvas id="logo-canvas" camera={{ position: [0, 0, 5]}}>
        <Model />
        <pointLight color="white" intensity={5} position={[0, 5, 0]} />
        <pointLight color="white" intensity={5} position={[0, -5, 0]} />
        <DeviceOrientationControls ref={deviceOrientationRef} />
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

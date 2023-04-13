import React, { useLayoutEffect, useRef, useState } from "react";
import "./index.css";
import $ from "jquery";
import "jquery-ui-bundle";

import * as THREE from "three";
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette, Glitch } from '@react-three/postprocessing';
import { GlitchMode } from "postprocessing";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls, OrthographicCamera, Environment } from "@react-three/drei";

import LOGO_MODEL from "../../Assets/Models/toposphere.glb";

const Entry = () => {
    const [glitchState, setGlitchState] = useState(true);
    const [noiseState, setNoiseState] = useState(true);
    const [environmentState, setEnvironmentState] = useState(false);
    
    const Model = () => {
        const [opacity, setOpacity] = useState(0);
        const model = useGLTF(LOGO_MODEL);
        const modelRef = useRef();

        useFrame(({clock}) => {
            modelRef.current.rotation.y += 0.002;

            if (opacity <= 0.3) {
                setOpacity(prevOpacity => prevOpacity + 0.001);
            }

            if (window.innerWidth >= 690) {
                if (clock.elapsedTime >= 5) {
                    setNoiseState(false);
                    setEnvironmentState(true);
                } else if (clock.elapsedTime >= 4) {
                    setGlitchState(false);
                }
            } else {
                if (clock.elapsedTime >= 3.6) {
                    setNoiseState(false);
                    setEnvironmentState(true);
                } else if (clock.elapsedTime >= 3.2) {
                    setGlitchState(false);
                }
            }
        });

        useLayoutEffect(() => {
            model.nodes.sphere.material.opacity = opacity;
        }, [opacity]);
    
        useLayoutEffect(() => {
            model.nodes.Plane.visible = false;
            model.nodes.sphere.material.wireframe = false;
            model.nodes.sphere.material.depthWrite = true;
            model.nodes.sphere.material.depthTest = true;
            model.nodes.sphere.material.transparent = true;

            model.nodes.sphere.material.color.r = 0;
            model.nodes.sphere.material.color.g = 0;
            model.nodes.sphere.material.color.b = 0;

            const box = new THREE.Box3().setFromObject(modelRef.current);
            const center = box.getCenter(new THREE.Vector3());
    
            modelRef.current.position.set(-center.x, -center.y - 1, -center.z);

            setTimeout(() => {
                $("#logo-canvas canvas").animate({backgroundColor: "#fff"}, 1000);
                $("#logo-canvas").delay(1000).animate({left: "25vw"}, 2500);
            }, 4000);
        }, [model]);
    
        return (
            <group ref={modelRef}>
                <primitive object={model.scene} scale={1.5} />
            </group>
        );
    };

    return (
        <Canvas id="logo-canvas" camera={{ position: [0, 0, 5]}}>
            <Model />
            <pointLight color="white" intensity={5} position={[0, 5, 0]} />
            <pointLight color="white" intensity={5} position={[0, -5, 0]} />
            {environmentState === true && <Environment preset="dawn" />}
            <OrbitControls enableZoom={false}/>
            <EffectComposer>
                <Bloom luminanceThreshold={1.0} luminanceSmoothing={1.0} />
                {noiseState === true && <Noise opacity={1} />}
                {glitchState === true && <Glitch duration={[0.1, 1.0]} mode={GlitchMode.SPORADIC} ratio={0.50} dtSize={128}/>}
            </EffectComposer>
        </Canvas>
    )
}

export default Entry;
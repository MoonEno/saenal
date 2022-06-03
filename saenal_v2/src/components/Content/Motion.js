import React, { Fragment, useEffect } from 'react'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

function Motion() {

    const canvas = document.getElementById('canvas');
    if (canvas !== null) {
        let scene = new THREE.Scene();

        let renderer = new THREE.WebGLRenderer({
            canvas : canvas,
            antialias: true
        });
        renderer.outputEncoding = THREE.sRGBEncoding;

        let camera = new THREE.PerspectiveCamera(30, 1);
        camera.position.set(0,0,5);

        scene.background = new THREE.Color("rgb(245, 245, 245)");

        let loader = new GLTFLoader();
        loader.load('/3d/shiba/scene.gltf', function(gltf) {
            scene.add(gltf.scene);
            function animate() {
                requestAnimationFrame(animate);
                gltf.scene.rotation.y -= 0.01;
                gltf.scene.rotation.x += 0.02;
                renderer.render(scene, camera);
            }
            animate();
        });
    }
    
    return (
        <Fragment>
            <canvas id="canvas" style={{width: '100%', height: '80%'}}> </canvas>
        </Fragment>
    )
}

export default Motion
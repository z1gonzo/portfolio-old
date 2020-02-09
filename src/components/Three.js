import React from "react";
import ReactDOM from "react-dom";

import * as THREE from "three";
import App from '../App'

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

let scene, camera, renderer, cube;

const init = () => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  

  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const texture = new THREE.TextureLoader().load("./img/hulk.jpg");

  const material = new THREE.MeshBasicMaterial({
    color: 0x0000ff
    // map: texture
  });
  cube = new THREE.Mesh(geometry, material);

  scene.add(cube);

  camera.position.z = 5;
};

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

window.addEventListener("resize", onWindowResize, false);

init();
animate();
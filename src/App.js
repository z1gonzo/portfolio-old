import React from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import Main from "./components/Main";
import Works from "./components/Works";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
      
      <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={450}
              classNames="fade"
            >
              <Switch location={location}>
                <Route exact path="/" component={Main} />
                <Route path="/works" component={Works} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />

      </div>
    </Router>
  );
}


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

  let color = new THREE.Color( 'skyblue' );

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setClearColor( 0xfffff, 1 );


  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(3.5, 3.5, 3.5);
  const texture = new THREE.TextureLoader().load("./img/hulk.jpg");

  const material = new THREE.MeshBasicMaterial({
    // color: 0x000000
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

// init();
// animate();

export default App;
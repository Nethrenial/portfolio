import { createScene } from "./scenes";
import { createLights } from "./lights";
import { createObjects } from "./objects";
import { createHelpers } from "./helpers";
import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

/**
 * Initiate the game
 * @param gameSceneElement Element to render the game scene in
 */
export function init(gameSceneElement: HTMLDivElement) {
  const { scene, renderer, camera } = createScene(gameSceneElement);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enablePan = true;
  controls.enableRotate = true;
  controls.enableZoom = true;
  createLights(scene);
  createObjects(scene);
  createHelpers(scene);

  gameLoop(renderer, camera, scene, controls);
}

// declare a function named gameLoop with an argument of type returned by the createObjects function
function gameLoop(
  renderer: WebGLRenderer,
  camera: PerspectiveCamera,
  scene: Scene,
  controller: OrbitControls
) {
  controller.update();

  // render the scene
  renderer.render(scene, camera);
  // call the gameLoop function again
  requestAnimationFrame(() => gameLoop(renderer, camera, scene, controller));
}

import { createScene } from "./scenes";
import { createLights } from "./lights";
import { createObjects } from "./objects";
import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { updatePlane } from "./objects/AirPlane";

const mousePosition = {
  x: 0,
  y: 0,
};

/**
 * Initiate the game
 * @param gameSceneElement Element to render the game scene in
 */
export function init(gameSceneElement: HTMLDivElement) {
  const { scene, renderer, camera } = createScene(gameSceneElement);
  createLights(scene);
  const objects = createObjects(scene);

  document.addEventListener("mousemove", handleMouseMove, false);

  gameLoop(objects, renderer, camera, scene);
}

// declare a function named gameLoop with an argument of type returned by the createObjects function
function gameLoop(
  objects: ReturnType<typeof createObjects>,
  renderer: WebGLRenderer,
  camera: PerspectiveCamera,
  scene: Scene
) {
  // update the sea and sky
  objects.sea.mesh.rotation.z += 0.005;
  objects.sky.mesh.rotation.z += 0.01;

  updatePlane(mousePosition);

  // render the scene
  renderer.render(scene, camera);
  // call the gameLoop function again
  requestAnimationFrame(() => gameLoop(objects, renderer, camera, scene));
}

function handleMouseMove(event: MouseEvent) {
  const tx = -1 + (event.clientX / window.innerWidth) * 2;
  const ty = 1 - (event.clientY / window.innerHeight) * 2;
  mousePosition.x = tx;
  mousePosition.y = ty;
}

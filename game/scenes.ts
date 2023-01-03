import {
  Scene,
  Fog,
  PerspectiveCamera,
  WebGLRenderer,
  sRGBEncoding,
} from "three";
export function createScene(gameSceneElement: HTMLDivElement) {
  let height = window.innerHeight;
  let width = window.innerWidth;

  const scene = new Scene();

  let aspectRatio = width / height;
  const fieldOfView = 60;
  const nearPlane = 1;
  const farPlane = 10000;

  const camera = new PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane
  );

  camera.position.x = 100;
  camera.position.z = 300;
  camera.position.y = 100;

  const renderer = new WebGLRenderer({
    alpha: true,
    antialias: true,
  });

  renderer.setSize(width, height);
  renderer.outputEncoding = sRGBEncoding;

  // resize the canvas when the window is resized, to allow for responsive design
  window.addEventListener("resize", () => {
    height = window.innerHeight;
    width = window.innerWidth;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });

  renderer.shadowMap.enabled = true;

  gameSceneElement.appendChild(renderer.domElement);

  return {
    scene,
    camera,
    renderer,
  };
}

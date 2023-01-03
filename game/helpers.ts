import { AxesHelper, Scene } from "three";

export function createHelpers(scene: Scene) {
  const axesHelper = new AxesHelper(5000000);
  scene.add(axesHelper);
}

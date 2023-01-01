import { C } from "html-validate/dist/cjs/core";
import { Object3D, Scene } from "three";
import { Cloud } from "./Cloud";

export class Sky {
  mesh: Object3D;

  constructor() {
    this.mesh = new Object3D();

    const numberOfClouds = 20;

    const stepAngle = (Math.PI * 2) / numberOfClouds;

    for (let i = 0; i < numberOfClouds; i++) {
      const cloud = new Cloud();

      const angle = stepAngle * i;
      const height = 750 + Math.random() * 200;

      cloud.mesh.position.y = Math.sin(angle) * height;
      cloud.mesh.position.x = Math.cos(angle) * height;

      cloud.mesh.rotation.z = angle + Math.PI / 2;

      cloud.mesh.position.z = -400 - Math.random() * 400;

      const size = 1 + Math.random() * 2;
      cloud.mesh.scale.set(size, size, size);

      this.mesh.add(cloud.mesh);
    }
  }
}

export function createSky(scene: Scene) {
  const sky = new Sky();
  sky.mesh.position.y = -600;
  scene.add(sky.mesh);
  return sky;
}

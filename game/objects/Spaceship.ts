import { Group, Scene } from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function createSpaceship(scene: Scene) {
  return new Promise<Group>((resolve, reject) => {
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(
      "/models/spaceship/scene.gltf",
      (gltf) => {
        gltf.scene.scale.set(1, 1, 1);
        gltf.scene.position.set(0, 0, 0);
        gltf.scene.castShadow = true;
        gltf.scene.receiveShadow = true;
        scene.add(gltf.scene);
        resolve(gltf.scene);
      },
      (xhr) => {
        console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
      },
      (error) => {
        reject(error.message);
      }
    );
  });
}

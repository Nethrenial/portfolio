import { BoxGeometry, Mesh, MeshPhongMaterial, Object3D } from "three";

export class Cloud {
  geometry: BoxGeometry;
  material: MeshPhongMaterial;
  mesh: Object3D;

  constructor() {
    this.mesh = new Object3D();

    this.geometry = new BoxGeometry(20, 20, 20);
    this.material = new MeshPhongMaterial({
      color: GameColors.white,
    });

    const numOfBlocks = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < numOfBlocks; i++) {
      const mesh = new Mesh(this.geometry, this.material);
      mesh.position.x = i * 15;
      mesh.position.y = Math.random() * 10;
      mesh.position.z = Math.random() * 10;
      mesh.rotation.z = Math.random() * Math.PI * 2;
      mesh.rotation.y = Math.random() * Math.PI * 2;

      const size = 0.1 + Math.random() * 0.9;
      mesh.scale.set(size, size, size);

      mesh.castShadow = true;
      mesh.receiveShadow = true;

      this.mesh.add(mesh);
    }
  }
}

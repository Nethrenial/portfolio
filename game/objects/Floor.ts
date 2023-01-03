import { Mesh, Scene, PlaneGeometry, MeshPhongMaterial } from "three";

export class FLoor {
  mesh: Mesh;
  geometry: PlaneGeometry;
  material: MeshPhongMaterial;

  constructor() {
    this.geometry = new PlaneGeometry(100, 100, 100, 100);
    this.material = new MeshPhongMaterial({ color: 0xee00ef });
    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.rotation.x = -Math.PI / 2;
  }
}

export function createFloor(scene: Scene) {
  const floor = new FLoor();
  scene.add(floor.mesh);
  return floor;
}

import {
  CylinderGeometry,
  Matrix4,
  Mesh,
  MeshPhongMaterial,
  Scene,
} from "three";

export class Sea {
  geometry: CylinderGeometry;
  material: MeshPhongMaterial;
  mesh: Mesh;

  constructor() {
    this.geometry = new CylinderGeometry(600, 600, 800, 40, 10);
    this.geometry.applyMatrix4(new Matrix4().makeRotationX(-Math.PI / 2));

    this.material = new MeshPhongMaterial({
      color: GameColors.blue,
      transparent: true,
      opacity: 0.6,
      flatShading: true,
    });

    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.receiveShadow = true;
  }
}

export function createSea(scene: Scene) {
  const sea = new Sea();
  sea.mesh.position.y = -600;
  scene.add(sea.mesh);
  return sea;
}

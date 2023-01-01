import {
  BoxGeometry,
  Float32BufferAttribute,
  Mesh,
  MeshPhongMaterial,
  Object3D,
  Scene,
} from "three";

export class AirPlane {
  mesh: Object3D;
  propeller: Mesh;

  constructor() {
    this.mesh = new Object3D();

    // creating the cockpit
    const cockpitGeometry = new BoxGeometry(60, 50, 50, 1, 1, 1);
    const cockpitMaterial = new MeshPhongMaterial({
      color: GameColors.red,
      flatShading: true,
    });

    const cockpit = new Mesh(cockpitGeometry, cockpitMaterial);
    cockpit.castShadow = true;
    cockpit.receiveShadow = true;
    this.mesh.add(cockpit);

    // creating the engine
    const engineGeometry = new BoxGeometry(20, 50, 50, 1, 1, 1);
    const engineMaterial = new MeshPhongMaterial({
      color: GameColors.white,
      flatShading: true,
    });

    const engine = new Mesh(engineGeometry, engineMaterial);

    engine.position.x = 40;
    engine.castShadow = true;
    engine.receiveShadow = true;
    this.mesh.add(engine);

    // creating the tail section
    const tailGeometry = new BoxGeometry(15, 20, 5, 1, 1, 1);
    const tailMaterial = new MeshPhongMaterial({
      color: GameColors.red,
      flatShading: true,
    });
    const tail = new Mesh(tailGeometry, tailMaterial);
    tail.position.set(-35, 25, 0);
    tail.castShadow = true;
    tail.receiveShadow = true;
    this.mesh.add(tail);

    // creating the wing
    const wingGeometry = new BoxGeometry(40, 8, 150, 1, 1, 1);
    const wingMaterial = new MeshPhongMaterial({
      color: GameColors.red,
      flatShading: true,
    });
    const wing = new Mesh(wingGeometry, wingMaterial);
    wing.castShadow = true;
    wing.receiveShadow = true;
    this.mesh.add(wing);

    // creating the propeller
    const propellerGeometry = new BoxGeometry(20, 10, 10, 1, 1, 1);
    const propellerMaterial = new MeshPhongMaterial({
      color: GameColors.brown,
      flatShading: true,
    });

    this.propeller = new Mesh(propellerGeometry, propellerMaterial);
    this.propeller.castShadow = true;
    this.propeller.receiveShadow = true;

    // blades
    const bladeGeometry = new BoxGeometry(1, 100, 20, 1, 1, 1);
    const bladeMaterial = new MeshPhongMaterial({
      color: GameColors.brownDark,
      flatShading: true,
    });

    const blade = new Mesh(bladeGeometry, bladeMaterial);
    blade.position.set(8, 0, 0);
    blade.castShadow = true;
    blade.receiveShadow = true;
    this.propeller.add(blade);
    this.propeller.position.set(50, 0, 0);
    this.mesh.add(this.propeller);
  }
}

let airPlane: AirPlane | null = null;

export function createAirPlane(scene: Scene) {
  airPlane = new AirPlane();
  airPlane.mesh.scale.set(0.25, 0.25, 0.25);
  airPlane.mesh.position.y = 100;
  scene.add(airPlane.mesh);
  return airPlane;
}

export function updatePlane(mousePosition: { x: number; y: number }) {
  if (airPlane) {
    const targetX = normalize(mousePosition.x, -1, 1, -100, 100);
    const targetY = normalize(mousePosition.y, -1, 1, 25, 175);

    airPlane.mesh.position.y = targetY;
    airPlane.mesh.position.x = targetX;
    airPlane.propeller.rotation.x += 0.3;
  }
}

function normalize(
  v: number,
  vmin: number,
  vmax: number,
  tmin: number,
  tmax: number
) {
  const nv = Math.max(Math.min(v, vmax), vmin);
  const dv = vmax - vmin;
  const pc = (nv - vmin) / dv;
  const dt = tmax - tmin;
  const tv = tmin + pc * dt;
  return tv;
}

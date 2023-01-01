import { Scene } from "three";

import { createSea } from "./Sea";
import { createSky } from "./Sky";
import { createAirPlane } from "./AirPlane";

export function createObjects(scene: Scene) {
  const sea = createSea(scene);
  const sky = createSky(scene);
  const airPlane = createAirPlane(scene);

  return {
    sea,
    sky,
    airPlane,
  };
}

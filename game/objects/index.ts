import { Scene } from "three";
import { createFloor } from "./Floor";
import { createSpaceship } from "./Spaceship";

export async function createObjects(scene: Scene) {
  const floor = createFloor(scene);
  const spaceship = await createSpaceship(scene);
  return {
    floor,
    spaceship,
  };
}

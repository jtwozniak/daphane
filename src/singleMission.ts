import { executeStep, getCoordinates } from './missionStep';
import { Coordinates, FallMap, Position, RobotInput } from './types';

function isRobotLost({ x, y }: Position, worldSize: Coordinates) {
  return x < 0 || y < 0 || x > worldSize.x || y > worldSize.y;
}

export function executeRobotMission(
  robotInput: RobotInput,
  fallMap: FallMap,
  worldSize: Coordinates
) {
  const { position, instructions } = robotInput;
  let currentPosition = position;
  let lost = false;

  for (const step of instructions) {
    // it is better to not do recursion
    const newPosition = executeStep(currentPosition, step, fallMap);
    lost = isRobotLost(newPosition, worldSize);
    if (lost) {
      const lostAt = getCoordinates(newPosition);
      fallMap[lostAt] = true;
      break;
    }
    currentPosition = newPosition;
  }

  return {
    position: currentPosition,
    lost,
  };
}

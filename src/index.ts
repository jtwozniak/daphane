import { move } from './move';
import { parseInput } from './parseInput';
import { rotateLeft, rotateRight } from './rotate';
import {
  Coordinates,
  FallMap,
  Instruction,
  Position,
  RobotInput,
} from './types';

const stepMap = {
  F: move,
  R: rotateRight,
  L: rotateLeft,
};

function getCoordinates({ x, y }: Position) {
  return `${x}:${y}`;
}

function shouldIgnoreStep(position: Position, fallMap: FallMap) {
  return !!fallMap[getCoordinates(position)];
}

function isRobotLost({ x, y }: Position, worldSize: Coordinates) {
  return x < 0 || y < 0 || x > worldSize.x || y > worldSize.y;
}

function executeStep(position: Position, step: Instruction, fallMap: FallMap) {
  const newPosition = stepMap[step](position);
  // if robot fall before, skip step
  if (shouldIgnoreStep(newPosition, fallMap)) {
    return position;
  }
  return newPosition;
}

function executeRobotMission(
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

export function martian(input: string[]) {
  const { worldSize, robotInputs } = parseInput(input);
  // key is position in form of string 'x:y'
  // value is true if robot fall on that possition in past
  const fallMap: FallMap = {}; // '-1:-1': undefined | true

  for (const robotInput of robotInputs) {
    executeRobotMission(robotInput, fallMap, worldSize);
  }

  console.log(worldSize, robotInputs);
}

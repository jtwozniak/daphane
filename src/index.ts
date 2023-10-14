import assert from 'assert';
import { chunk } from 'lodash';
import { Coordinates, InstructionArray, Position } from './types';

function parseRobotInput(input: string[]) {
  assert(input.length === 2);
  const [positionInput, instructionsInput] = input;

  const [x, y, o, ...positionRest] = positionInput.split(' ');
  assert(positionRest.length === 0);
  const position = Position.parse({ x, y, o });

  const instructions = InstructionArray.parse(instructionsInput.split(''));

  return {
    position,
    instructions,
  };
}

function parseWorldInput(input: string) {
  const [x, y, ...rest] = input.split(' ');
  assert(rest.length === 2);
  return Coordinates.parse({ x, y });
}

function parseInput(input: string[]) {
  // we should get one line + 2 * x robots lines
  assert(input.length % 2 === 1, 'wrong number of input lines');
  const [worldInput, ...robotsInput] = input;

  const worldSize = parseWorldInput(worldInput);

  const robotInputChunks = chunk(robotsInput, 2);
  const parsedRobotInputs = robotInputChunks.map(ri => parseRobotInput(ri));

  return {
    worldSize,
    robotInputs: parsedRobotInputs,
  };
}

export function martian(input: string[]) {
  const { worldSize, robotInputs } = parseInput(input);

  const marsMap = [[]];
}

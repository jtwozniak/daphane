import { chunk } from 'lodash';
import { Coordinates, InstructionArray, Position } from './types';

export function parseRobotPosition(input: string) {
  const [x, y, o, ...positionRest] = input.split(' ');
  if (positionRest.length !== 0) {
    throw new Error('Wrong robot position input');
  }

  return Position.parse({ x, y, o });
}

export function parseRobotInstructions(input: string) {
  return InstructionArray.parse(input.split(''));
}

export function parseRobotInput(input: string[]) {
  if (input.length !== 2) {
    throw new Error('Wrong robot input');
  }
  const [positionInput, instructionsInput] = input;

  const position = parseRobotPosition(positionInput);
  const instructions = parseRobotInstructions(instructionsInput);

  return {
    position,
    instructions,
  };
}

export function parseWorldInput(input: string) {
  const [x, y, ...rest] = input.split(' ');
  if (rest.length > 0) {
    throw new Error('Wrong world input');
  }
  return Coordinates.parse({ x, y });
}

export function cleanWhiteSpaces(input: string[]) {
  return input.map((i) => i.replace(/\s/g, ' ').trim()).filter((s) => s !== '');
}

export function parseInput(rawInput: string[]) {
  if (rawInput.length === 0) {
    throw new Error('Input must be provided');
  }

  const input = cleanWhiteSpaces(rawInput);
  // clean whitespaces - no edge whitespaces + internal ones are always single space
  const [worldInput, ...robotsInput] = input;

  const worldSize = parseWorldInput(worldInput);

  const robotInputChunks = chunk(robotsInput, 2);
  const parsedRobotInputs = robotInputChunks.map((ri) => parseRobotInput(ri));

  return {
    worldSize,
    robotInputs: parsedRobotInputs,
  };
}

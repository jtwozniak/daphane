import { move } from './move';
import { rotateLeft, rotateRight } from './rotate';
import { FallMap, Instruction, Position } from './types';

const stepMap = {
  F: move,
  R: rotateRight,
  L: rotateLeft,
};

export function getCoordinates({ x, y }: Position) {
  return `${x}:${y}`;
}

function shouldIgnoreStep(position: Position, fallMap: FallMap) {
  return !!fallMap[getCoordinates(position)];
}

export function executeStep(
  position: Position,
  step: Instruction,
  fallMap: FallMap
) {
  const newPosition = stepMap[step](position);
  // if robot fall at this position before then skip step
  return shouldIgnoreStep(newPosition, fallMap) ? position : newPosition;
}

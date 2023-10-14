import { Position } from './types';

// rotation left will be one character to left, right to right - modulo 4
const rotationMap = ['N', 'E', 'S', 'W'] as const;

export function rotateLeft(p: Position) {
  const index = rotationMap.findIndex((e) => e === p.o);
  return { ...p, o: rotationMap[(index - 1) % 4] };
}

export function rotateRight(p: Position) {
  const index = rotationMap.findIndex((e) => e === p.o);
  return { ...p, o: rotationMap[(index + 1) % 4] };
}

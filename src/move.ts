import { Position } from './types';

// so move functions are separated
function moveNorth(p: Position) {
  return { ...p, y: p.y + 1 };
}

function moveSouth(p: Position) {
  return { ...p, y: p.y - 1 };
}

function moveEast(p: Position) {
  return { ...p, x: p.x + 1 };
}

function moveWest(p: Position) {
  return { ...p, x: p.x - 1 };
}

const movePostition = {
  N: moveNorth,
  S: moveSouth,
  E: moveEast,
  W: moveWest,
};

export function move(p: Position) {
  // TS automatically will detect missing move function
  return movePostition[p.o](p);
}

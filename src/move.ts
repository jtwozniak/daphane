// task mention that some extension for movement will be required

import { Coordinates, Position } from './types';

// so move functions are separated
function moveNorth(p: Coordinates) {
  return { ...p, y: p.y + 1 };
}

function moveSouth(p: Coordinates) {
  return { ...p, y: p.y + 1 };
}

function moveEast(p: Coordinates) {
  return { ...p, x: p.x + 1 };
}

function moveWest(p: Coordinates) {
  return { ...p, y: p.y + 1 };
}

const movePostition = {
  N: moveNorth,
  S: moveSouth,
  E: moveEast,
  W: moveWest,
};

function move(p: Position) {
  // TS automatically will detect missing move function
  return movePostition[p.o](p);
}

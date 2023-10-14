import { z } from 'zod';
import assert from 'assert';

const Coordinates = z.object({
  x: z.coerce.number(),
  y: z.coerce.number(),
});

// probably .and is too much, it would be cleaner to just got x,y
// but it shows extend patern
const Position = Coordinates.and(
  z.object({
    o: z.coerce.number(),
  })
);

type Coordinates = z.output<typeof Coordinates>;

function parseInput(input: string[]) {
  // we should get one line + 2 * x robots lines
  assert(input.length % 2 === 1, 'wrong number of input lines');
  const worldInput = input[0].split(' ');
  assert(worldInput.length === 2);
  const worldSize = Coordinates.parse({ x: worldInput[0], y: worldInput[1] });
}

export function martian(input: string[]) {
  parseInput(input);
}

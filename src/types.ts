import { z } from 'zod';
import { parseRobotInput } from './parseInput';

export const Coordinates = z.object({
  x: z.coerce.number(),
  y: z.coerce.number(),
});
export type Coordinates = z.output<typeof Coordinates>;

export const Orientation = z.union([
  z.literal('N'),
  z.literal('S'),
  z.literal('E'),
  z.literal('W'),
]);

// probably .and is too much, it would be cleaner to just got x,y
// but it shows extend patern
export const Position = Coordinates.and(
  z.object({
    o: Orientation,
  })
);
export type Position = z.output<typeof Position>;

export const Instruction = z.union([
  z.literal('F'),
  z.literal('R'),
  z.literal('L'),
]);
export type Instruction = z.output<typeof Instruction>;

export const InstructionArray = z.array(Instruction);

export type FallMap = Record<string, true>;
export type RobotInput = ReturnType<typeof parseRobotInput>;

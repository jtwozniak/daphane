import { parseInput } from './parseInput';

export function martian(input: string[]) {
  const { worldSize, robotInputs } = parseInput(input);

  console.log(worldSize, robotInputs);
}

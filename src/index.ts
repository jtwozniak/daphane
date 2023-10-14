import { parseInput } from './parseInput';
import { executeRobotMission } from './singleMission';
import { FallMap } from './types';

export function martian(input: string[]) {
  const { worldSize, robotInputs } = parseInput(input);
  // key is position in form of string 'x:y'
  // value is true if robot fall on that possition in past
  const fallMap: FallMap = {}; // '-1:-1': undefined | true

  return robotInputs.map((robotInput) => {
    const {
      position: { x, y, o },
      lost,
    } = executeRobotMission(robotInput, fallMap, worldSize);

    return `${x} ${y} ${o}${lost ? ' LOST' : ''}`;
  });
}

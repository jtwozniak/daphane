import { parseInput } from './parseInput';
import { EdgeMap, RobotInput } from './types';

function executeRobotMission(robotInput: RobotInput, edgeMap: EdgeMap) {}

export function martian(input: string[]) {
  const { worldSize, robotInputs } = parseInput(input);
  // key is position in form of string 'x:y'
  // value is true if robot fall on that possition in past
  const edgeMap: EdgeMap = {}; // '-1:-1': undefined | true

  for (const robotInput of robotInputs) {
    executeRobotMission(robotInput, edgeMap);
  }

  console.log(worldSize, robotInputs);
}

import { martian } from '.';

describe('parse input', () => {
  test('martian full test', () => {
    const input = `
  5 3
1 1 E
RFRFRFRF

3 2 N
FRRFLLFFRRFLL

0 3 W
LLFFFLFLFL
`.split('\n');
    expect(martian(input)).toMatchInlineSnapshot();
  });
});

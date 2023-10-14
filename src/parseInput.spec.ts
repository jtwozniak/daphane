import {
  cleanWhiteSpaces,
  parseInput,
  parseRobotInstructions,
  parseRobotPosition,
  parseWorldInput,
} from './parseInput';

describe('parse input', () => {
  test('world input', () => {
    expect(() => parseWorldInput('')).toThrow();
    expect(() => parseWorldInput('2')).toThrow();
    expect(() => parseWorldInput('2 f')).toThrow();
    expect(() => parseWorldInput('2 3 6')).toThrow();
    expect(parseWorldInput('2 3')).toMatchInlineSnapshot(`
{
  "x": 2,
  "y": 3,
}
`);
  });

  test('robot position', () => {
    expect(() => parseRobotPosition('')).toThrow();
    expect(() => parseRobotPosition('1 2')).toThrow();
    expect(() => parseRobotPosition('1 2 N 2')).toThrow();
    expect(() => parseRobotPosition('1 2 B')).toThrow();
    expect(parseRobotPosition('1 2 N')).toMatchInlineSnapshot(`
{
  "o": "N",
  "x": 1,
  "y": 2,
}
`);
  });

  test('robot instructions', () => {
    expect(() => parseRobotInstructions('')).not.toThrow();
    expect(() => parseRobotInstructions('123sf')).toThrow();
    expect(() => parseRobotInstructions('rfrfr')).toThrow();
    expect(parseRobotInstructions('RFRFRLLL')).toMatchInlineSnapshot(`
[
  "R",
  "F",
  "R",
  "F",
  "R",
  "L",
  "L",
  "L",
]
`);
  });

  test('whole input', () => {
    const testInput = `
1 2
      1 2 N 
      RFFR  
\t

4 4 E
FFLLRRFRL

`.split('\n');

    expect(cleanWhiteSpaces(testInput)).toMatchInlineSnapshot(`
[
  "1 2",
  "1 2 N",
  "RFFR",
  "4 4 E",
  "FFLLRRFRL",
]
`);
    expect(parseInput(testInput)).toMatchInlineSnapshot(`
{
  "robotInputs": [
    {
      "instructions": [
        "R",
        "F",
        "F",
        "R",
      ],
      "position": {
        "o": "N",
        "x": 1,
        "y": 2,
      },
    },
    {
      "instructions": [
        "F",
        "F",
        "L",
        "L",
        "R",
        "R",
        "F",
        "R",
        "L",
      ],
      "position": {
        "o": "E",
        "x": 4,
        "y": 4,
      },
    },
  ],
  "worldSize": {
    "x": 1,
    "y": 2,
  },
}
`);
  });
});

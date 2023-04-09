import { test, expect } from '@jest/globals';
import gendiff from '../src/index.js';
import { readFile } from '../src/utils.js';

const resultStylishJson = readFile('result.stylish.json.txt');
const resultStylishYml = readFile('result.stylish.yml.txt');

test.each([
  ['file1.json', 'file2.json', resultStylishJson],
  ['file1.yml', 'file2.yml', resultStylishYml],
])('.add(%i, %i)', (a, b, expected) => {
  expect(gendiff(a, b)).toBe(expected);
});

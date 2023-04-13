import { test, expect } from '@jest/globals';
import gendiff from '../src/index.js';
import { readFile } from '../src/utils.js';

const getString = (str) => String(str).trim();

const jsonStylishResult = getString(readFile('jsonStylishResult.txt'));
const ymlStylishResult = getString(readFile('ymlStylishResult.txt'));

test.each([
  ['file1.json', 'file2.json', jsonStylishResult],
  ['file1.yml', 'file2.yml', ymlStylishResult],
])('get diff', (a, b, expected) => {
  expect(getString(gendiff(a, b))).toEqual(expected);
});

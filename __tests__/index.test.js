import { test, expect } from '@jest/globals';
import gendiff from '../src/index.js';
import { readFile } from '../src/utils.js';

const getString = (str) => String(str).trim();

const jsonStylishResult = getString(readFile('jsonStylishResult.txt'));
const ymlStylishResult = getString(readFile('ymlStylishResult.txt'));

const jsonPlainResult = getString(readFile('jsonPlainResult.txt'));
const ymlPlainResult = getString(readFile('ymlPlainResult.txt'));

const jsonFormatJsonResult = getString(readFile('jsonFormatJsonResult.txt'));
const ymlFormatJsonResult = getString(readFile('ymlFormatJsonResult.txt'));

test.each([
  ['file1.json', 'file2.json', 'stylish', jsonStylishResult],
  ['file1.yml', 'file2.yml', 'stylish', ymlStylishResult],
  ['file1.json', 'file2.json', 'plain', jsonPlainResult],
  ['file1.yml', 'file2.yml', 'plain', ymlPlainResult],
  ['file1.json', 'file2.json', 'json', jsonFormatJsonResult],
  ['file1.yml', 'file2.yml', 'json', ymlFormatJsonResult],
])('get diff', (a, b, c, expected) => {
  expect(getString(gendiff(a, b, c))).toEqual(expected);
});

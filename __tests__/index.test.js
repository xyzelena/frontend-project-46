import { test, expect } from '@jest/globals';
import gendiff from '../src/index.js';

const result = `{
 - follow: false
   host: hexlet.io
 - proxy: 123.234.53.22
 - timeout: 50 
 + timeout: 20
 + verbose: true
}`;

test.each([
  ['file1.json','file2.json', result],
  ['file1.yml','file2.yml', result],
])('.add(%i, %i)', (a, b, expected) => {
  expect(gendiff(a,b)).toBe(expected);
});

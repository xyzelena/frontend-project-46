import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filepath) => path.join(__dirname, filepath);

const readFile = (filepath) => fs.readFileSync(path.resolve(process.cwd(), getFixturePath(filepath)), 'utf-8');

const getString = (str) => String(str).trim();

const jsonStylishResult = readFile('jsonStylishResult.txt');
const ymlStylishResult = readFile('ymlStylishResult.txt');

const jsonPlainResult = readFile('jsonPlainResult.txt');
const ymlPlainResult = readFile('ymlPlainResult.txt');

const jsonFormatJsonResult = readFile('jsonFormatJsonResult.txt');
const ymlFormatJsonResult = readFile('ymlFormatJsonResult.txt');

test.each([
  ['file1.json', 'file2.json', 'stylish', jsonStylishResult],
  ['file1.yml', 'file2.yml', 'stylish', ymlStylishResult],
  ['file1.json', 'file2.json', 'plain', jsonPlainResult],
  ['file1.yml', 'file2.yml', 'plain', ymlPlainResult],
  ['file1.json', 'file2.json', 'json', jsonFormatJsonResult],
  ['file1.yml', 'file2.yml', 'json', ymlFormatJsonResult],
])('get diff', (a, b, c, expected) => {
  expect(getString(gendiff(a, b, c))).toEqual(getString(expected));
});

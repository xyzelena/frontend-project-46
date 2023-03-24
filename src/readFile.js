import path from 'path';
import process from 'process';
import fs from 'fs';

const __dirname = process.cwd();

const getFilePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => {
  const data = fs.readFileSync(getFilePath(filename), 'utf-8');
  return JSON.parse(data);
};

export default readFile;

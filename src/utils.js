import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filepath) => path.join(__dirname, '..', '__fixtures__', filepath);

const readFile = (filepath) => fs.readFileSync(getFixturePath(filepath), 'utf-8');

const getExt = (filepath) => path.extname(filepath);

const parseFile = (filepath) => {
  const ext = getExt(filepath);
  const data = readFile(filepath);

  switch (ext) {
    case '.json': return JSON.parse(data);
    case '.yml': return yaml.load(data);
    case '.yaml': return yaml.load(data);
    default:
      throw new Error(`Unknown format: ${ext}!`);
  }
};

export { readFile, getExt, parseFile };

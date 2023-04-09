import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filepath) => path.join(__dirname, '..', '__fixtures__', filepath);

const readFile = (filepath) => fs.readFileSync(getFixturePath(filepath), 'utf-8');

const getExt = (filepath) => path.extname(filepath);

export { readFile, getExt };

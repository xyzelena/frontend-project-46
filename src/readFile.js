import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';

const parseFile = (data, ext) => {
  let parse;
  if (ext === '' || ext === '.json') parse = JSON.parse;
  else if (ext === '.yml' || ext === '.yaml') parse = yaml.load; 

  return parse(data);
};


const readFile = (filename) => {
  const ext = path.extname(filename);  
  
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

  const data = fs.readFileSync(getFixturePath(filename), 'utf-8');

  return parseFile(data, ext);
};

export default readFile;

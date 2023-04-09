import yaml from 'js-yaml';
import { readFile, getExt } from './utils.js';

const parseFile = (filepath) => {
  const ext = getExt(filepath);
  const data = readFile(filepath);

  switch (ext) {
    case 'json':
      return JSON.parse(data);

    case 'yml':
      return yaml.load(data);

    case 'yaml':
      return yaml.load(data);

    default:
      throw new Error(`Unknown format: '${ext}'!`);
  }
};

export default parseFile;

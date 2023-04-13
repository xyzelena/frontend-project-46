import { parseFile } from './utils.js';
import compareFiles from './compareFiles.js';
import applyFormat from './formatters/index.js';

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const file1 = parseFile(filepath1);
  const file2 = parseFile(filepath2);

  const diff = compareFiles(file1, file2);

  return applyFormat(diff, format);
};

export default gendiff;

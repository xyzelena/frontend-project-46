import parseFile from './parseFile.js';
import compareFiles from './compareFiles.js';

const gendiff = (filepath1, filepath2) => {
  const file1 = parseFile(filepath1);
  const file2 = parseFile(filepath2);

  return compareFiles(file1, file2);
};

export default gendiff;

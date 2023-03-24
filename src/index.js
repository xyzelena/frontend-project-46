import readFile from './readFile.js';
import compareFiles from './compareFiles.js';

const gendiff = (filepath1, filepath2) => {
  const file1 = readFile(filepath1);
  const file2 = readFile(filepath2);

  return compareFiles(file1, file2);
};

// gendiff('file1.json', 'file2.json');

export default gendiff;

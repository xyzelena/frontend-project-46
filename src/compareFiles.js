import _ from 'lodash';

const compareFiles = (file1, file2) => {
  const keys1 = Object.keys(file1);
  const keys2 = Object.keys(file2);
  const keys = (_.union(keys1, keys2)).sort();

  const space = ' ';

  const result = keys.map((key) => {
    if (!_.has(file1, key)) return `${space}+ ${key}: ${file2[key]}`;
    if (!_.has(file2, key)) return `${space}- ${key}: ${file1[key]}`;

    if (file1[key] !== file2[key]) {
      return `${space}- ${key}: ${file1[key]} \n${space}+ ${key}: ${file2[key]}`;
    }

    return `${space}${space} ${key}: ${file1[key]}`;
  });

  return (['{', ...result, '}'].join('\n'));
};

export default compareFiles;

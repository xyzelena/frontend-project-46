import _ from 'lodash';

const getKeys = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  return (_.union(keys1, keys2)).sort();
};

const compareFiles = (data1, data2) => {
  const keys = getKeys(data1, data2);

  const diff = keys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];
    let result = {};

    if (_.has(data1, key) && _.has(data2, key)) {
      if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
        result = { key, children: compareFiles(value1, value2), status: 'nested' };
        return result;
      }

      if (_.isEqual(value1, value2)) {
        result = { key, value1, status: 'unchanged' };
        return result;
      }
      result = {
        key, value1, value2, status: 'changed',
      };
      return result;
    } // end if with both has

    if (_.has(data1, key) && !_.has(data2, key)) {
      result = { key, value1, status: 'deleted' };
      return result;
    } if (!_.has(data1, key) && _.has(data2, key)) {
      result = { key, value2, status: 'added' };
      return result;
    }

    return result;
  });

  return diff;
};

export default compareFiles;

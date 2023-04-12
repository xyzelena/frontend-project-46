import _ from 'lodash';

const getIndent = (depth, replacer = ' ', spacesCount = 1) => replacer.repeat(depth * spacesCount);

const getBracketIndent = (depth, replacer = ' ', spacesCount = 1) => replacer.repeat((depth * spacesCount) - spacesCount);

const stringify = (value) => {
  const iter = (carrentValue, depth) => {
    if (!_.isPlainObject(carrentValue)) return `${carrentValue}`;

    const carrentIndent = getIndent(depth);
    const bracketIndent = getBracketIndent(depth);

    const arrCarValue = Object.entries(carrentValue);

    const lines = arrCarValue.map(([key, val]) => `${carrentIndent}${key}: ${iter(val, depth + 1)}`);

    const result = ['{', ...lines, `${bracketIndent}}`].join('\n');

    return result;
  };

  return iter(value, 1);
};

export { getIndent, getBracketIndent, stringify };

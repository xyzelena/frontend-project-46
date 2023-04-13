import _ from 'lodash';

const getIndent = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat((depth * spacesCount) - 2);

const getBracketIndent = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat((depth * spacesCount) - spacesCount);

const stringify = (carrentValue, depth = 1) => {
  if (!_.isPlainObject(carrentValue)) return `${carrentValue}`;

  const carrentIndent = getIndent(depth);
  const bracketIndent = getBracketIndent(depth);

  const arrCarValue = Object.entries(carrentValue);

  const lines = arrCarValue.map(([key, val]) => `${carrentIndent}  ${key}: ${stringify(val, depth + 1)}`);

  const result = ['{', ...lines, `${bracketIndent}}`].join('\n');

  return result;
};

export { getIndent, getBracketIndent, stringify };

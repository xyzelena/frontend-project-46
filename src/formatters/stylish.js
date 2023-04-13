import _ from 'lodash';

const getIndent = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat((depth * spacesCount) - 2);

const getBracketIndent = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat((depth * spacesCount) - spacesCount);

const doStringify = (carrentValue, depth = 1) => {
  if (!_.isPlainObject(carrentValue)) return `${carrentValue}`;

  const carrentIndent = getIndent(depth);
  const bracketIndent = getBracketIndent(depth);

  const arrCarValue = Object.entries(carrentValue);

  const lines = arrCarValue.map(([key, val]) => `${carrentIndent}  ${key}: ${doStringify(val, depth + 1)}`);

  const result = ['{', ...lines, `${bracketIndent}}`].join('\n');

  return result;
};

const doStylish = (diff) => {
  const iter = (carrentValue, depth = 1) => {
    const carrentIndent = getIndent(depth);
    const bracketIndent = getBracketIndent(depth);

    const lines = carrentValue.flatMap((node) => {
      switch (node.status) {
        case 'nested':
          return `${carrentIndent}  ${node.key}: ${iter(node.children, depth + 1)}`;

        case 'deleted':
          return `${carrentIndent}- ${node.key}: ${doStringify(node.value1, depth + 1)}`;

        case 'added':
          return `${carrentIndent}+ ${node.key}: ${doStringify(node.value2, depth + 1)}`;

        case 'unchanged':
          return `${carrentIndent}  ${node.key}: ${doStringify(node.value1, depth + 1)}`;

        case 'changed':
          return [
            `${carrentIndent}- ${node.key}: ${doStringify(node.value1, depth + 1)}`,
            `${carrentIndent}+ ${node.key}: ${doStringify(node.value2, depth + 1)}`,
          ];

        default:
          throw new Error(`Unknown type: ${node.status}!`);
      }
    });

    return ['{', ...lines, `${bracketIndent}}`].join('\n');
  };

  return iter(diff);
};

export default doStylish;

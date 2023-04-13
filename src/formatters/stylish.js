import { getIndent, getBracketIndent, stringify } from './utils.js';

const doStylish = (diff) => {
  const iter = (carrentValue, depth = 1) => {
    const carrentIndent = getIndent(depth);
    const bracketIndent = getBracketIndent(depth);
    let result = '';

    const lines = carrentValue.flatMap((node) => {
      switch (node.status) {
        case 'nested':
          result = `${carrentIndent}  ${node.key}: ${iter(node.children, depth + 1)}`;
          return result;

        case 'deleted':
          result = `${carrentIndent}- ${node.key}: ${stringify(node.value1, depth + 1)}`;
          return result;

        case 'added':
          result = `${carrentIndent}+ ${node.key}: ${stringify(node.value2, depth + 1)}`;
          return result;

        case 'unchanged':
          result = `${carrentIndent}  ${node.key}: ${stringify(node.value1, depth + 1)}`;
          return result;

        case 'changed':
          result = [
            `${carrentIndent}- ${node.key}: ${stringify(node.value1, depth + 1)}`,
            `${carrentIndent}+ ${node.key}: ${stringify(node.value2, depth + 1)}`,
          ];
          return result;

        default:
          throw new Error(`Unknown type: ${node.status}!`);
      }
    });

    result = ['{', ...lines, `${bracketIndent}}`].join('\n');

    return result;
  };

  return iter(diff);
};

export default doStylish;

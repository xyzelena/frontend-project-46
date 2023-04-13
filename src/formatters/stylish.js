import { getIndent, getBracketIndent, stringify } from './utils.js';

const doStylish = (diff) => {
  const iter = (carrentValue, depth = 1) => {
    const carrentIndent = getIndent(depth);
    const bracketIndent = getBracketIndent(depth);

    const lines = carrentValue.flatMap((node) => {
      switch (node.status) {
        case 'nested':
          return `${carrentIndent}  ${node.key}: ${iter(node.children, depth + 1)}`;

        case 'deleted':
          return `${carrentIndent}- ${node.key}: ${stringify(node.value1, depth + 1)}`;

        case 'added':
          return `${carrentIndent}+ ${node.key}: ${stringify(node.value2, depth + 1)}`;

        case 'unchanged':
          return `${carrentIndent}  ${node.key}: ${stringify(node.value1, depth + 1)}`;

        case 'changed':
          return [
            `${carrentIndent}- ${node.key}: ${stringify(node.value1, depth + 1)}`,
            `${carrentIndent}+ ${node.key}: ${stringify(node.value2, depth + 1)}`,
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

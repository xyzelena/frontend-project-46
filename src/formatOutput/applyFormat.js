import doStylish from './stylish.js';

const applyFormat = (diff, format) => {
  switch (format) {
    case ('stylish'):
      return doStylish(diff);

    default:
      throw new Error(`Unknown format name: ${format}!`);
  }
};

export default applyFormat;

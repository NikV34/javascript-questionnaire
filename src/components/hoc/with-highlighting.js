import React from 'react';
import Highlight from 'react-highlight.js';

const Highlighted = ({ task }) => {
  if (task) {
    const regex = /\w+$/gm;
    const content = task.match(regex);
    const language = content ? content[0] : 'javascript';
    const result = task.replace(language, '').replace('\n', '');
    return <Highlight language={language}>{result}</Highlight>;
  }
  return null;
};

export default Highlighted;

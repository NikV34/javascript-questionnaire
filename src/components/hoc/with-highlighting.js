import React from 'react';
import Highlight from 'react-highlight.js';


const withHighlighting = (Wrapped) => {
  return (props) => {
    if (props.task) {
      const regex = /\w+$/gm;
      const language = props.task.match(regex) ? props.task.match(regex)[0] : 'javascript';
      const task = props.task.replace(language, '').replace('\n', '');
      const newProps = { ...props, task: task }
      return (
        <Highlight language={ language }>
          <Wrapped { ...newProps } />
        </Highlight>
      )
    } else {
      return null
    }
  }
};

export default withHighlighting;
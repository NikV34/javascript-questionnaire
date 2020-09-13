import React from 'react';
import Highlight from 'react-highlight.js';


const withHighlighting = (Wrapped) => {
  return (props) => {
    return (
      <Highlight language={"javascript"}>
        <Wrapped {...props} />
      </Highlight>
    )
  }
};

export default withHighlighting;
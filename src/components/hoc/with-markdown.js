import React from 'react';
import ReactMarkdown from 'react-markdown';

const withMarkdown = (content) => {
  return <ReactMarkdown source={content} escapeHtml={false} />;
};

export default withMarkdown;

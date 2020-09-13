import React from 'react';
import withMarkdown from '../hoc/with-markdown';

const QuestionOptionList = ({options}) => {
  return options.map((option) => {
    return <li key={options.indexOf(option)}>{withMarkdown(option)}</li>
  })
}

export default QuestionOptionList;
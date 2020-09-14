import React from 'react';
import withMarkdown from '../hoc/with-markdown';

import './question-option-list.css';

const QuestionOptionList = ({options}) => {
  return options.map((option, idx) => {
    const id = idx + 1;
    return (
      <div className="custom-control custom-radio" key={id}>
        <input type="radio" id={`customRadio${id}`} name="customRadio" className="custom-control-input" />
        <label className="custom-control-label" htmlFor={`customRadio${id}`}>
          {withMarkdown(option)}
        </label>
      </div>
    )
  })
}

export default QuestionOptionList;
import React from 'react';
import withMarkdown from '../hoc/with-markdown';

import './question-option-list-item.css';

const QuestionOptionListItem = ({option, id}) => {
  return (
    <div className="custom-control custom-radio" key={id}>
      <input
        type="radio"
        id={`customRadio${id}`}
        value={id}
        name="customRadio"
        className="custom-control-input" />
      <label className="custom-control-label" htmlFor={`customRadio${id}`}>
        {withMarkdown(option)}
      </label>
    </div>
  )
}

export default QuestionOptionListItem;
import React from 'react';
import withMarkdown from '../hoc/with-markdown';

import './question-option-list-item.css';

const QuestionOptionListItem = ({option, id, onAnsweredQuestion, optionStatus, disabled}) => {
  const disabledClass = disabled ? " disabled" : "";
  let statusClass = null;
  if (optionStatus === true) {
    statusClass = " question-passed"
  } else if (optionStatus === false) {
    statusClass = " question-failed"
  } else {
    statusClass = ""
  }

  return (
    <div
      className={`question-option-list-item${statusClass + disabledClass}`}
      onClick={disabled ? null : () => onAnsweredQuestion(id)}
      key={id}>
      {withMarkdown(`${id}) ${option}`)}
    </div>
  )
}

export default QuestionOptionListItem;
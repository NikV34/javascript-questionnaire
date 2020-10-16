import React from 'react';
import { questionOption, id, funcRequired, questionOptionStatus, disabled } from '../../types';
import withMarkdown from '../hoc/with-markdown';

import './question-option-list-item.css';

const QuestionOptionListItem = ({ option, id, onAnsweredQuestion, optionStatus, disabled }) => {
  const disabledClass = disabled ? " disabled" : "";

  let statusClass = null;
  switch (optionStatus) {
    case true:
      statusClass = "question-passed";
      break;
    case false:
      statusClass = "question-failed";
      break;
    default:
      statusClass = "";
  };

  return (
    <div
      className={`question-option-list-item ${statusClass + disabledClass}`}
      onClick={disabled ? null : () => onAnsweredQuestion(id)}
      key={id}>
      { withMarkdown(`${id}) ${option}`)}
    </div>
  )
}

QuestionOptionListItem.propTypes = {
  option: questionOption,
  id: id,
  onAnsweredQuestion: funcRequired,
  optionStatus: questionOptionStatus,
  disabled: disabled
}

export default QuestionOptionListItem;
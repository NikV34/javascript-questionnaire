import React from 'react';

import './question-list-item.css';


const QuestionListItem = ({question, className, onOpenedQuestion }) => {

  return (
    <button type="button" className={className} onClick={onOpenedQuestion}>
      <span>{question.id}</span>
    </button>
  )
};

export default QuestionListItem;
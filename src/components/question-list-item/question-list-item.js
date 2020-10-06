import React from 'react';
import { question, className, funcRequired } from '../../types';

import './question-list-item.css';


const QuestionListItem = ({ question, className, onOpenedQuestion }) => {

  return (
    <button type="button" className={className} onClick={onOpenedQuestion}>
      <span>{question.id}</span>
    </button>
  )
};

QuestionListItem.propTypes = {
  question: question,
  className: className,
  onOpenedQuestion: funcRequired
}

export default QuestionListItem;
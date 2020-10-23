import React from 'react';
import { questionType, className, funcRequired } from '../../types';

import './question-list-item.css';

const QuestionListItem = ({ question, className, onOpenedQuestion }) => {
  return (
    <button type="button" className={className} onClick={onOpenedQuestion}>
      <span>{question.id}</span>
    </button>
  );
};

QuestionListItem.propTypes = {
  question: questionType,
  className,
  onOpenedQuestion: funcRequired,
};

export default QuestionListItem;

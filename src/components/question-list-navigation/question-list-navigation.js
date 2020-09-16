import React from 'react';

import './question-list-navigation.css';

const QuestionListNavigation = ({ btnRole, onToggleQuestionListNavigation }) => {
  return (
    <button type="button" className="btn btn-primary" onClick={onToggleQuestionListNavigation}>
      {btnRole}
    </button>
  )
}

export default QuestionListNavigation;
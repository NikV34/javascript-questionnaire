import React from 'react';

import './question-list-navigation.css';

const QuestionListNavigation = ({ btnRole, onToggleQuestionListNavigation, disabled }) => {
  return (
    <button type="button"
            disabled={disabled}
            className="btn btn-primary"
            onClick={onToggleQuestionListNavigation}>
      {btnRole}
    </button>
  )
}

export default QuestionListNavigation;
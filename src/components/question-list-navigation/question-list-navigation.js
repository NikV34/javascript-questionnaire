import React from 'react';

import './question-list-navigation.css';

const QuestionListNavigation = ({ btnRole, onToggleQuestionListNavigation, disabled }) => {
  return (
    <button type="button"
            disabled={disabled}
            className="question-list-navigation-button"
            onClick={onToggleQuestionListNavigation}>
      <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        {btnRole==="prev" ?
          <path d="M6.5 2L2.5 6.46668L6.5 10.9334" stroke="#686868" stroke-width="2.6" stroke-linecap="round"/>
          :
          <path d="M1.5 2L5.5 6.46668L1.5 10.9334" stroke="#686868" stroke-width="2.6" stroke-linecap="round"/>
        }
      </svg>
    </button>
  )
}

export default QuestionListNavigation;
import React from 'react';
import { navigationButtonRole, disabled, funcRequired } from '../../types';

import './question-list-navigation.css';

const QuestionListNavigation = ({ btnRole, onToggleQuestionListNavigation, disabled }) => {
  return (
    <button type="button"
            disabled={ disabled }
            className="question-list-navigation-button"
            onClick={ onToggleQuestionListNavigation }>
      <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        { btnRole==="prev" ?
          <path d="M6.5 2L2.5 6.46668L6.5 10.9334" stroke="#686868" strokeWidth="2.6" strokeLinecap="round"/>
          :
          <path d="M1.5 2L5.5 6.46668L1.5 10.9334" stroke="#686868" strokeWidth="2.6" strokeLinecap="round"/>
        }
      </svg>
    </button>
  )
}

QuestionListNavigation.propTypes = {
  btnRole: navigationButtonRole,
  onToggleQuestionListNavigation: funcRequired,
  disabled: disabled
}

export default QuestionListNavigation;
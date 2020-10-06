import React from 'react';
import { navigationButtonRole, disabled, funcRequired } from '../../types';


import './question-list-navigation.css';

const QuestionListNavigation = ({ btnRole, onToggleQuestionListNavigation, disabled }) => {

  return (
    <button type="button"
            disabled={ disabled }
            className="question-list-navigation-button"
            onClick={ onToggleQuestionListNavigation } >
              <span className={ `${ btnRole }-icon` }></span>
    </button>
  )
}

QuestionListNavigation.propTypes = {
  btnRole: navigationButtonRole,
  onToggleQuestionListNavigation: funcRequired,
  disabled: disabled
}

export default QuestionListNavigation;
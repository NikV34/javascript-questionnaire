import React from 'react';
import PropTypes from 'prop-types';

import './question-list-navigation.css';

const QuestionListNavigation = ({
  btnRole,
  onToggleQuestionListNavigation,
  disabled,
}) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className="question-list-navigation-button"
      onClick={onToggleQuestionListNavigation}
    >
      <span className={`${btnRole}-icon`} />
    </button>
  );
};

QuestionListNavigation.propTypes = {
  btnRole: PropTypes.string.isRequired,
  onToggleQuestionListNavigation: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default QuestionListNavigation;

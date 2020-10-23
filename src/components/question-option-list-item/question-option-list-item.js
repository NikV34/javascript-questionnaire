import React from 'react';
import PropTypes from 'prop-types';

import './question-option-list-item.css';

const QuestionOptionListItem = ({
  option,
  id,
  className,
  disabled,
  onAnsweredQuestion,
}) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className={`question-option-list-item ${className}`}
      onClick={disabled ? null : () => onAnsweredQuestion(id)}
      key={id}
    >
      {option}
    </div>
  );
};

QuestionOptionListItem.propTypes = {
  option: PropTypes.element.isRequired,
  id: PropTypes.number.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  onAnsweredQuestion: PropTypes.func.isRequired,
};

QuestionOptionListItem.defaultProps = {
  className: '',
};

export default QuestionOptionListItem;

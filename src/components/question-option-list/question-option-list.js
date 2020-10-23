import React from 'react';
import PropTypes from 'prop-types';

import QuestionOptionListItem from '../question-option-list-item';

import './question-option-list.css';

const QuestionOptionList = ({ optionList, disabled, func }) => {
  return (
    <div className="question-option-list">
      {optionList.map(({ number, content, className }) => {
        return (
          <QuestionOptionListItem
            option={content}
            id={number}
            key={number}
            className={className}
            disabled={disabled}
            onAnsweredQuestion={func}
          />
        );
      })}
    </div>
  );
};

QuestionOptionList.propTypes = {
  optionList: PropTypes.arrayOf(PropTypes.string).isRequired,
  disabled: PropTypes.bool.isRequired,
  func: PropTypes.func.isRequired,
};

export default QuestionOptionList;

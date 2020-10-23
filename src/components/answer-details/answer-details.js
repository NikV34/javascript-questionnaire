import React from 'react';
import PropTypes from 'prop-types';

import './answer-details.css';

const AnswerDetails = ({ answer, explanation, onClearQuestionsStatus }) => {
  return (
    <div className="answer-details">
      <div className="answer-details-header">
        <h2 className="answer-details-headline">Right Answer: #{answer + 1}</h2>
        <button
          type="button"
          className="question-details-button"
          onClick={onClearQuestionsStatus}
          title="All your progress will be cleared"
        >
          <span>Reset all</span>
        </button>
      </div>
      <div className="answer-details-explanation">{explanation}</div>
    </div>
  );
};

AnswerDetails.propTypes = {
  answer: PropTypes.number,
  explanation: PropTypes.element,
  onClearQuestionsStatus: PropTypes.func,
};

AnswerDetails.defaultProps = {
  answer: null,
  explanation: null,
  onClearQuestionsStatus: null,
};

export default AnswerDetails;

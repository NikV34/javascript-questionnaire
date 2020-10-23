import React from 'react';
import PropTypes from 'prop-types';
import { questionType, questionDefault } from '../../types';
import { withMarkdown } from '../hoc';

import AnswerDetails from './answer-details';

const AnswerDetailsContainer = ({ question, onClearQuestionsStatus }) => {
  if (question.status !== null) {
    return (
      <AnswerDetails
        answer={question.answer}
        explanation={withMarkdown(question.explanation)}
        onClearQuestionsStatus={onClearQuestionsStatus}
      />
    );
  }
  return null;
};

AnswerDetailsContainer.propTypes = {
  question: questionType,
  onClearQuestionsStatus: PropTypes.func,
};

AnswerDetailsContainer.defaultProps = {
  question: questionDefault,
  onClearQuestionsStatus: null,
};

export default AnswerDetailsContainer;

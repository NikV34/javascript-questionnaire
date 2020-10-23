import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleQuestionOpened, clearQuestionsStatus } from '../../actions';
import { questionsType, questionsDefault } from '../../types';
import { findQuestionById } from '../../utils';

import ErrorIndicator from '../error-indicator';
import QuestionDetails from './question-details';
import AnswerDetailsContainer from '../answer-details';

import './question-details-container.css';

const QuestionDetailsContainer = ({
  questions,
  loadingStatus,
  errorStatus,
  questionId,
  toggleNavigation,
  clearAllStatus,
}) => {
  // we already have one spinner
  if (loadingStatus) return null;

  if (errorStatus) return <ErrorIndicator />;

  if (!questions) return null;

  const { question, questionIndex } = findQuestionById(questions, questionId);

  const onOpened = (actionType, index) => () =>
    toggleNavigation(actionType, index);

  return (
    <div className="question-details-container">
      <QuestionDetails
        question={question}
        onToggleQuestionOpened={(action) => onOpened(action, questionIndex)}
      />
      <AnswerDetailsContainer
        question={question}
        onClearQuestionsStatus={() => clearAllStatus()}
      />
    </div>
  );
};

const mapStateToProps = ({
  questionList: { questions, loading, error },
  activeQuestion: { questionId },
}) => {
  return { questions, loading, error, questionId };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleNavigation: (actionType, id) =>
      dispatch(toggleQuestionOpened(actionType, id)),
    clearAllStatus: () => dispatch(clearQuestionsStatus()),
  };
};

QuestionDetailsContainer.propTypes = {
  questions: questionsType,
  loadingStatus: PropTypes.bool,
  errorStatus: PropTypes.bool,
  questionId: PropTypes.number,
  toggleNavigation: PropTypes.func,
  clearAllStatus: PropTypes.func,
};

QuestionDetailsContainer.defaultProps = {
  questions: questionsDefault,
  loadingStatus: null,
  errorStatus: null,
  questionId: null,
  toggleNavigation: null,
  clearAllStatus: null,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionDetailsContainer);

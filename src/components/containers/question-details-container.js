import React from 'react';
import { connect } from 'react-redux';

import ErrorIndicator from '../error-indicator';
import QuestionDetails from '../question-details';
import AnswerDetails from '../answer-details';
import { toggleQuestionOpened, clearQuestionsStatus } from '../../actions';
import { loading, error, funcRequired, id, questions } from '../../types';

import './question-details-container.css';

const QuestionDetailsContainer = ({ questions, loading, error, questionId, toggleQuestionOpened, clearQuestionsStatus }) => {
  //we already have one spinner
  if (loading) return <div></div>;

  if (error) return <ErrorIndicator />;

  const openedQuestionId = (!questionId && questions.length !== 0) ? questions[0].id : questionId;
  const openedQuestion = questions.find((question) => question.id === openedQuestionId);
  const openedQuestionIndex = questions.indexOf(openedQuestion);

  const onToggleQuestionOpened = (actionType, index) => () => toggleQuestionOpened(actionType, index);

  return (
    <div className="question-details-container">
      <QuestionDetails
        question={openedQuestion}
        onToggleQuestionOpened={(action) => onToggleQuestionOpened(action, openedQuestionIndex)}
      />
      <AnswerDetails onClearQuestionsStatus={() => clearQuestionsStatus()} />
    </div>
  )
}

QuestionDetailsContainer.propTypes = {
  questions: questions,
  loading: loading,
  error: error,
  questionId: id,
  toggleQuestionOpened: funcRequired,
  clearQuestionsStatus: funcRequired
};

const mapStateToProps = ({ questionList: { questions, loading, error }, activeQuestion: { questionId } }) => {
  return { questions, loading, error, questionId }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleQuestionOpened: (actionType, id) => dispatch(toggleQuestionOpened(actionType, id)),
    clearQuestionsStatus: () => dispatch(clearQuestionsStatus())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetailsContainer);
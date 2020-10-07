import React, { Component } from 'react';
import { connect } from 'react-redux';

import ErrorIndicator from '../error-indicator';
import QuestionDetails from '../question-details';
import AnswerDetails from '../answer-details';
import { toggleQuestionOpened, questionAnswered, clearQuestionsStatus } from '../../actions';

import './question-details-container.css';

class QuestionDetailsContainer extends Component {

  render() {
    const {
      questions,
      loading,
      error,
      questionId,
      questionAnswered,
      toggleQuestionOpened,
      clearQuestionsStatus
      } = this.props;

    const openedQuestionId = (!questionId && questions.length !== 0) ? questions[0].id : questionId;

    const openedQuestion = questions.find((question) => question.id === openedQuestionId);

    const openedQuestionIndex = questions.indexOf(openedQuestion);

    const onToggleQuestionOpened = (actionType, index) => {
      return () => {
        toggleQuestionOpened(actionType, index)
      }
    }

    if (loading) {
      return <div></div>;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <div className="question-details-container">
        <QuestionDetails
          question={ openedQuestion }
          questionAnswered={ (result, answeredOptionIndex) => questionAnswered(result, openedQuestion.id, answeredOptionIndex) }
          onToggleQuestionOpened={ (action) => onToggleQuestionOpened(action, openedQuestionIndex) }
        />
        <AnswerDetails onClearQuestionsStatus={ () => clearQuestionsStatus() } />
      </div>
    )
  }
}

const mapStateToProps = ({ questionList: { questions, loading, error }, activeQuestion: { questionId } }) => {
  return { questions, loading, error, questionId }
}

const mapDispatchToProps = (dispatch) => {
  return {
    questionAnswered: (result, id, answeredOptionIndex) => dispatch(questionAnswered(result, id, answeredOptionIndex)),
    toggleQuestionOpened: (actionType, id) => dispatch(toggleQuestionOpened(actionType, id)),
    clearQuestionsStatus: () => dispatch(clearQuestionsStatus())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetailsContainer);
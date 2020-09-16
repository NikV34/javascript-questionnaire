import React, { Component } from 'react';
import {connect} from 'react-redux';

import ErrorIndicator from '../error-indicator';
import QuestionDetails from "../question-details";
import AnswerDetails from "../answer-details";
import { toggleQuestionOpened, questionAnswered} from "../../actions";

class QuestionDetailsContainer extends Component {

  render() {
    const {
      questions,
      loading,
      error,
      questionId,
      questionAnswered,
      toggleQuestionOpened
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
      <div className="col-md-12 col-12">
        <QuestionDetails
          question={openedQuestion}
          questionAnswered={(result) => questionAnswered(result, openedQuestion.id)}
          onToggleQuestionOpened={(action) => onToggleQuestionOpened(action, openedQuestionIndex)}
        />
        <AnswerDetails />
      </div>
    )
  }
}

const mapStateToProps = ({
                           questionList: { questions, loading, error },
                           activeQuestion: { questionId } }) => {
  return {
    questions,
    loading,
    error,
    questionId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    questionAnswered: (result, id) => dispatch(questionAnswered(result, id)),
    toggleQuestionOpened: (actionType, id) => dispatch(toggleQuestionOpened(actionType, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetailsContainer);
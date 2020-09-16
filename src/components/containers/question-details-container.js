import React, { Component } from 'react';
import {connect} from 'react-redux';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import QuestionDetails from "../question-details";
import AnswerDetails from "../answer-details";
import {questionFailed, questionPassed } from "../../actions";

class QuestionDetailsContainer extends Component {

  render() {
    const { questions, loading, error, questionId, onQuestionPassed, onQuestionFailed } = this.props;

    const openedQuestionId = (!questionId && questions.length !== 0) ? questions[0].id : questionId;

    const openedQuestion = questions.find((question) => question.id === openedQuestionId);

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }


    return (
      <div className="col-md-12 col-12">
        <QuestionDetails
          question={openedQuestion}
          onQuestionPassed={onQuestionPassed}
          onQuestionFailed={onQuestionFailed}
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
    onQuestionPassed: (id) => dispatch(questionPassed(id)),
    onQuestionFailed: (id) => dispatch(questionFailed(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetailsContainer);
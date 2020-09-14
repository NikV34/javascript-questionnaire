import React, { Component } from 'react';
import {connect} from 'react-redux';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import QuestionDetails from "../question-details";
import AnswerDetails from "../answer-details";

class QuestionDetailsContainer extends Component {

  render() {
    const { questions, loading, error, questionId, passed, shownAnswer } = this.props;

    const openedQuestion = questions.find((question) => question.id === questionId);

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <React.Fragment>
        <QuestionDetails question={openedQuestion} passed={passed} />
        <AnswerDetails question={openedQuestion} shownAnswer={shownAnswer} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({
                           questionList: { questions, loading, error },
                           activeQuestion: {questionId, passed, shownAnswer}}) => {
  return {
    questions,
    loading,
    error,
    questionId,
    passed,
    shownAnswer
  }
}


export default connect(mapStateToProps)(QuestionDetailsContainer);
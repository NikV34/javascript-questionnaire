import React, { Component } from 'react';
import {connect} from 'react-redux';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import QuestionDetails from "../question-details";
import AnswerDetails from "../answer-details";
import {questionOpened} from "../../actions";

class QuestionDetailsContainer extends Component {

  render() {
    const { questions, loading, error, questionId, passed, shownAnswer, onOpenedQuestion } = this.props;

    const openedQuestion = questions[questionId];

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <React.Fragment>
        <QuestionDetails question={openedQuestion} passed={passed} onOpenedQuestion={() => onOpenedQuestion(0)}/>
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

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenedQuestion: (id) => dispatch(questionOpened(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetailsContainer);
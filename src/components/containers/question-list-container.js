import React, { Component } from 'react';
import {connect} from 'react-redux';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import QuestionList from '../question-list/question-list';
import {fetchQuestions, questionOpened} from '../../actions';
import { withQuestionnaireService } from '../hoc';

class QuestionListContainer extends Component {

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    const { questions, loading, error, questionId, onOpenedQuestion  } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    const openedQuestionId = (!questionId && questions.length !== 0) ? questions[0].id : questionId;

    return (
      <QuestionList questions={questions} openedQuestionId={openedQuestionId} onOpenedQuestion={onOpenedQuestion} />
    );
  };
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
  };
}

const mapDispatchToProps = (dispatch, { questionnaireService }) => {
  return {
    fetchQuestions: fetchQuestions(questionnaireService, dispatch),
    onOpenedQuestion: (id) => dispatch(questionOpened(id))
  };
};

export default withQuestionnaireService()(connect(mapStateToProps, mapDispatchToProps)(QuestionListContainer));
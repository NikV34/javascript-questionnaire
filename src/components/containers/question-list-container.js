import React, { Component } from 'react';
import {connect} from 'react-redux';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import QuestionList from '../question-list/question-list';
import {fetchQuestions, questionOpened, toggleQuestionListNavigation} from '../../actions';
import { withQuestionnaireService } from '../hoc';

class QuestionListContainer extends Component {

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    const { questions, page,  loading, error, questionId, onOpenedQuestion, onToggleQuestionListNavigation } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    const openedQuestionId = (!questionId && questions.length !== 0) ? questions[0].id : questionId;

    return (
      <QuestionList page={page}
                    questions={questions}
                    openedQuestionId={openedQuestionId}
                    onOpenedQuestion={onOpenedQuestion} 
                    onToggleQuestionListNavigation={onToggleQuestionListNavigation}/>
    );
  };
}

const mapStateToProps = ({
                           questionList: { questions, page, loading, error },
                           activeQuestion: {questionId}}) => {
  return {
    questions,
    page,
    loading,
    error,
    questionId
  };
}

const mapDispatchToProps = (dispatch, { questionnaireService }) => {
  return {
    fetchQuestions: fetchQuestions(questionnaireService, dispatch),
    onOpenedQuestion: (id) => dispatch(questionOpened(id)),
    onToggleQuestionListNavigation: (action) => dispatch(toggleQuestionListNavigation(action))
  };
};

export default withQuestionnaireService()(connect(mapStateToProps, mapDispatchToProps)(QuestionListContainer));
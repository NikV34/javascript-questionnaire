import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from 'store';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import QuestionList from '../question-list/question-list';
import {
  fetchQuestions,
  questionsFromLocalStorage,
  questionOpened,
  toggleQuestionListNavigation,
} from '../../actions';
import { withQuestionnaireService } from '../hoc';

class QuestionListContainer extends Component {
  localStorageQuestions = () => {
    const questions = [];
    store.each((value, key) => {
      if (value.hasOwnProperty('question')) questions.push(value);
    });
    questions.sort((a, b) => {
      return a.id - b.id;
    });
    return questions;
  };

  componentDidMount() {
    if (store.get('questionsStored')) {
      this.props.questionsFromLocalStorage(this.localStorageQuestions());
    } else {
      this.props.fetchQuestions();
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.questions !== prevProps.questions &&
      this.props.questions.length
    ) {
      this.props.questions.map((item) =>
        store.set(`questionId${item.id}`, item)
      );
    }
  }

  render() {
    const {
      questions,
      loading,
      error,
      pagination,
      questionId,
      onOpenedQuestion,
      onToggleQuestionListNavigation,
    } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    const openedQuestionId =
      !questionId && questions.length !== 0 ? questions[0].id : questionId;

    return (
      <QuestionList
        pagination={pagination}
        questions={questions}
        openedQuestionId={openedQuestionId}
        onOpenedQuestion={onOpenedQuestion}
        onToggleQuestionListNavigation={onToggleQuestionListNavigation}
      />
    );
  }
}

const mapStateToProps = ({
  questionList: { questions, loading, error },
  activeQuestion: { questionId },
  pagination,
}) => {
  return { loading, error, questions, pagination, questionId };
};

const mapDispatchToProps = (dispatch, { questionnaireService }) => {
  return {
    fetchQuestions: fetchQuestions(questionnaireService, dispatch),
    onOpenedQuestion: (id) => dispatch(questionOpened(id)),
    questionsFromLocalStorage: (questions) =>
      dispatch(questionsFromLocalStorage(questions)),
    onToggleQuestionListNavigation: (action) =>
      dispatch(toggleQuestionListNavigation(action)),
  };
};

export default withQuestionnaireService()(
  connect(mapStateToProps, mapDispatchToProps)(QuestionListContainer)
);

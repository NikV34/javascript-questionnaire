import React, { Component } from 'react';
import {connect} from 'react-redux';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import QuestionList from '../question-list/question-list';
import { fetchQuestions } from '../../actions';
import { withQuestionnaireService } from '../hoc';

class QuestionListContainer extends Component {

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    const { questions, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <QuestionList questions={questions}/>
    )
  }
}

const mapStateToProps = ({questionList: { questions, loading, error }}) => {
  return { questions, loading, error }
}

const mapDispatchToProps = (dispatch, { questionnaireService }) => {
  return {
    fetchQuestions: fetchQuestions(questionnaireService, dispatch)
  };
};

export default withQuestionnaireService()(connect(mapStateToProps, mapDispatchToProps)(QuestionListContainer));
import React, { Component } from 'react';
import {connect} from "react-redux";

import withQuestionnaireService from "../hoc";
import { fetchQuestions } from '../../actions'
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import QuestionListItem from "../question-list-item";

import './question-list.css';

class QuestionList extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  renderItems(questionList) {
    return questionList.slice(130, 138).map((question) => {
      return (
        <li key={question.id.toString()}>
          <QuestionListItem question={question}/>
          <br/>
        </li>
      )
    })
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
      <ul>
        { this.renderItems(questions) }
      </ul>
      )
  }
}

const mapStateToProps = ({questionList: { questions, loading, error }}) => {
  return { questions, loading, error }
}

const mapDispatchToProps = (dispatch, { questionnaireService }) => {
  return {
    fetchBooks: fetchQuestions(questionnaireService, dispatch)
  };
};

export default withQuestionnaireService()(connect(mapStateToProps, mapDispatchToProps)(QuestionList));
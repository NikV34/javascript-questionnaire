import React, {Component} from 'react';

import QuestionList from '../question-list';
import withQuestionnaireService from '../hoc';

import './app.css';


class App extends Component {

  state = {
    questionList: []
  }

  render () {
  const { questionnaireService } = this.props;
  if (this.state.questionList.length === 0) {
    questionnaireService.getAllQuestions()
      .then((questionList) => {
        this.setState({
          questionList: questionList
        })
      })
  }

    return (
      <div>
        <QuestionList questionList={ this.state.questionList } />
      </div>
    )
  }
}

export default withQuestionnaireService()(App);
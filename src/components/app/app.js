import React, {Component} from 'react';
import Highlight from 'react-highlight.js'

import withQuestionnaireService from '../hoc';

import './app.css';

class App extends Component {

  state = {
    questionList: []
  }

  renderItems = (questionList) => {
    return questionList.map((item) => {
      return (
        <li>
            <ul>
              <li>{item.id}. {item.question}</li>
              <li>
                <Highlight language="javascript">{item.task}</Highlight>
              </li>
              <li>
                <ul>
                  {item.option_list.map((option) => {
                    return <li>{option}</li>
                  })}
                </ul>
              </li>
              <br/>
              <li>Answer: {item.answer}</li>
              <li>{item.explanation}</li>
            </ul>
            <br/>
          </li>
      )
    })
  }


  render () {
  const { questionnaireService } = this.props;

  questionnaireService.getAllQuestions()
    .then((questionList) => {
      this.setState({
        questionList: questionList
      })
    })

    return <div>{
      this.renderItems(this.state.questionList)
    }</div>
  }
}

export default withQuestionnaireService()(App);
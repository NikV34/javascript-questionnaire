import React from 'react';
import withQuestionnaireService from '../hoc';

import './app.css';

const App = ({questionnaireService}) => {
  const list = questionnaireService.getQuestions().map((item) => {
    return (
      <li>
        <ul>
          <li>{item.id}. {item.question}</li>
          <li>{item.task}</li>
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

  return <ul>{
    list
  }</ul>
}

export default withQuestionnaireService()(App);
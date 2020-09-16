import React from 'react';

import QuestionListContainer from '../containers/question-list-container';
import QuestionDetailsContainer from '../containers/question-details-container';

import './app.css';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <QuestionListContainer/>
        <QuestionDetailsContainer/>
      </div>
    </div>
  )
}

export default App;
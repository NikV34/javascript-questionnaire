import React from 'react';

import QuestionListContainer from '../containers/question-list-container';
import QuestionDetailsContainer from "../containers/question-details-container";

import './app.css';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <QuestionListContainer/>
        </div>
        <div className="col-md-8">
          <QuestionDetailsContainer/>
        </div>
      </div>
    </div>
  )
}

export default App;
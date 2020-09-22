import React from 'react';

import QuestionListContainer from '../containers/question-list-container';
import QuestionDetailsContainer from '../containers/question-details-container';
import Results from '../results/results';

import './app.css';


const App = () => {
  return (
    <div className="container page-body">
      <QuestionListContainer/>
      <QuestionDetailsContainer/>
    </div>
  )
}

export default App;
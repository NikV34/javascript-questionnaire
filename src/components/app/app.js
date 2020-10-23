import React from 'react';

import QuestionListContainer from '../containers/question-list-container';
import QuestionDetailsContainer from '../question-details';

import './app.css';

const App = () => {
  return (
    <div className="container page-body">
      <QuestionListContainer />
      <QuestionDetailsContainer />
    </div>
  );
};

export default App;

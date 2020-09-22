import React from 'react';

import './results.css';

const Results = ({progress, total, passed, failed}) => {
return (
  <div className="page-header">
    <h1 className="page-headline">JavaScript Questionnaire</h1>
    <div className="results">
      <h3 className="results-headline">Total Score:</h3>
      <div className="results-score-list">
        <div className="results-score-item">
          Answered: <b>{`${progress} / ${total}`}</b>
        </div>
        <div className="results-score-item">
          Remaining: <b>{total - progress}</b>
        </div>
        <div className="results-score-item">
          Passed: <span className="passed">{passed}</span>
        </div>
        <div className="results-score-item">
          Failed: <span className="failed">{failed}</span>
        </div>
      </div>        
    </div>
    </div>
  )
}

export default Results;

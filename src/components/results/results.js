import React from 'react';
import { results } from '../../types';

import './results.css';

const Results = ({ progress, total, passed, failed }) => {
  const renderItems = (itemList) => {
    return itemList.map((item, idx) => {
      return (
        <div className="results-score-item" key={`${total - idx}`}>
          {item}
        </div>
      );
    });
  };

  const valueList = [
    <span>
      Answered: <b>{`${progress} / ${total}`}</b>
    </span>,
    <span>
      Remaining: <b>{total - progress}</b>
    </span>,
    <span>
      Passed: <span className="passed">{passed}</span>
    </span>,
    <span>
      Failed: <span className="failed">{failed}</span>
    </span>,
  ];

  return (
    <div className="page-header">
      <h1 className="page-headline">JavaScript Questionnaire</h1>
      <div className="results">
        <h3 className="results-headline">Total Score:</h3>
        <div className="results-score-list">{renderItems(valueList)}</div>
      </div>
    </div>
  );
};

Results.propTypes = { ...results };

export default Results;

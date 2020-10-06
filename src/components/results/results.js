import React from 'react';
import PropTypes from 'prop-types';

import './results.css';

const Results = ({ progress, total, passed, failed }) => {

  const renderItems = (itemList) => {
    return itemList.map((item) => {
      return (
        <div className="results-score-item">
          {item}
        </div>
      )
    })
  };

  const valueList = [
    <span>Answered: <b>{`${ progress } / ${ total }`}</b></span>,
    <span>Remaining: <b>{ total - progress }</b></span>,
    <span>Passed: <span className="passed">{ passed }</span></span>,
    <span>Failed: <span className="failed">{ failed }</span></span>
  ]

  return (
    <div className="page-header">
      <h1 className="page-headline">JavaScript Questionnaire</h1>
      <div className="results">
        <h3 className="results-headline">Total Score:</h3>
        <div className="results-score-list">
          { renderItems(valueList) }
        </div>
      </div>
    </div>
  )
}

Results.propTypes = {
  progress: PropTypes.number,
  total: PropTypes.number,
  passed: PropTypes.number,
  failed: PropTypes.number
}

export default Results;

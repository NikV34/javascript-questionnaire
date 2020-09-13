import React from 'react';

import QuestionListItem from '../question-list-item';

import './question-list.css';

const renderItems = (questionList) => {
  return questionList.slice(130, 135).map((question) => {
    return (
      <button type="button" className="btn btn-secondary" key={question.id.toString()}>
        <QuestionListItem question={question}/>
      </button>
    )
  })
}

const QuestionList = ({ questions }) => {
  return (
    <div className="btn-group-vertical question-list">
      { renderItems(questions) }
    </div>
  )
}

export default QuestionList;
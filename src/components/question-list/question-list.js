import React from 'react';

import QuestionListItem from '../question-list-item';

import './question-list.css';

const renderItems = (questionList, openedQuestionId, onOpenedQuestion) => {
  return questionList.slice(0, 5).map((question) => {
    let className = 'list-group-item list-group-item-action';
    if (question.id === openedQuestionId) {
      className += ' active'
    }
    return (
      <QuestionListItem
        className={className}
        key={question.id.toString()}
        question={question}
        onOpenedQuestion={() => onOpenedQuestion(question.id)} />
    )
  })
}

const QuestionList = ({ questions, openedQuestionId, onOpenedQuestion }) => {
  return (
    <div className="list-group">
      { renderItems(questions, openedQuestionId, onOpenedQuestion) }
    </div>
  )
}

export default QuestionList;
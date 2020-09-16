import React from 'react';

import QuestionListNavigation from '../question-list-navigation';
import QuestionListItem from '../question-list-item';

import './question-list.css';

const renderItems = (questionList, pagination, openedQuestionId, onOpenedQuestion) => {
  return questionList
    .slice(pagination.page * pagination.size , pagination.page * pagination.size + pagination.size)
    .map((question) => {
      let className = 'btn btn-outline-secondary';
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

const QuestionList = ({ questions, pagination, openedQuestionId, onOpenedQuestion, onToggleQuestionListNavigation }) => {
  return (
    <div className="col-md-12 col-12">
      <div className="btn-group question-list" role="group" aria-label="Question number group">
        <QuestionListNavigation
          btnRole="prev"
          disabled={!pagination.page}
          onToggleQuestionListNavigation={() => onToggleQuestionListNavigation('prev')}
        />
        { renderItems(questions, pagination, openedQuestionId, onOpenedQuestion) }
        <QuestionListNavigation
          btnRole="next"
          disabled={pagination.page >= Math.floor(pagination.totalItems / pagination.size)}
          onToggleQuestionListNavigation={() => onToggleQuestionListNavigation('next')} />
      </div>
    </div>
  )
}

export default QuestionList;
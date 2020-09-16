import React from 'react';

import QuestionListNavigation from '../question-list-navigation';
import QuestionListItem from '../question-list-item';

import './question-list.css';

const renderItems = (questionList, page, openedQuestionId, onOpenedQuestion) => {
  const itemsOnPage = 15;
  return questionList.slice(page * itemsOnPage , page * itemsOnPage + itemsOnPage).map((question) => {
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

const QuestionList = ({ questions, page, openedQuestionId, onOpenedQuestion, onToggleQuestionListNavigation }) => {
  return (
    <div className="col-md-12 col-12">
      <div className="btn-group question-list" role="group" aria-label="Question number group">
        <QuestionListNavigation btnRole="prev" onToggleQuestionListNavigation={() => onToggleQuestionListNavigation('prev')} />
        { renderItems(questions, page, openedQuestionId, onOpenedQuestion) }
        <QuestionListNavigation btnRole="next" onToggleQuestionListNavigation={() => onToggleQuestionListNavigation('next')} />
      </div>
    </div>
  )
}

export default QuestionList;
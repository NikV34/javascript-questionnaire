import React from 'react';
import { questions, pagination, funcRequired, id } from '../../types';

import QuestionListNavigation from '../question-list-navigation';
import QuestionListItem from '../question-list-item';
import QuestionnaireProgressContainer from '../containers/questionnaire-progress-container';
import './question-list.css';

const renderItems = (questionList, pagination, openedQuestionId, onOpenedQuestion) => {
  return questionList
    .slice(pagination.page * pagination.size , pagination.page * pagination.size + pagination.size)
    .map((question) => {
      let className = 'question-list-item-button';
      if (question.id === openedQuestionId) {
        className += ' active'
      }
      if (question.status) {
        className += ' question-passed'
      }
      if (question.status === false) {
        className += ' question-failed'
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
    <div className="question-list-container">
      <QuestionnaireProgressContainer questions={questions}/>
      <div className="question-list" role="group" aria-label="Question number group">
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

QuestionList.propTypes = {
  questionList: questions,
  pagination: pagination,
  openedQuestionId: id,
  onOpenedQuestion: funcRequired
}

export default QuestionList;
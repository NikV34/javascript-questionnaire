import React from 'react';
import { question, funcRequired } from '../../types';

import withHighlighting from '../hoc/with-highlighting';
import QuestionOptionList from '../question-option-list';

import './question-details.css';

const QuestionTask = ({ task }) => {
  return <span>{task}</span>;
}

const QuestionDetails = ({ question, onToggleQuestionOpened, questionAnswered }) => {
  const HighlightedQuestionTask = withHighlighting(QuestionTask);

  const onAnsweredQuestion = (optionId) => {
    //optionId != index
    if (optionId === question.answer + 1) {
      questionAnswered(true, optionId - 1)
    } else {
      questionAnswered(false, optionId - 1)
    }
  }

  return (
    <div className="question-details">
      <h2 className="question-details-headline">{`${question.id}. ${question.question}`}</h2>
      <div className="question-details-task">
        <HighlightedQuestionTask task={question.task} />
      </div>
      <QuestionOptionList question={question} onAnsweredQuestion={onAnsweredQuestion} />
      <div className="question-details-button-group" role="group" aria-label="Basic example">
        <button type="button" className="question-details-button" onClick={onToggleQuestionOpened('prev')} >
          <span className="question-details-button-prev">Previous</span>
        </button>
        <button type="button" className="question-details-button" onClick={onToggleQuestionOpened('next')} >
          <span className="question-details-button-next">Next</span>
        </button>
      </div>
    </div>
  );
}

QuestionDetails.propTypes = {
  question: question.isRequired,
  onToggleQuestionOpened: funcRequired,
  questionAnswered: funcRequired
};


export default QuestionDetails;
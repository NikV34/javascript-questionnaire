import React from 'react';

import {withMarkdown} from '../hoc';

import './answer-details.css';

const QuestionAnswer = ({answer}) => {
  return<span>Answer: {answer + 1}</span>
}

const QuestionExplanation = ({explanation}) => {
  return withMarkdown(explanation)
}

const AnswerDetails = ({question, shownAnswer}) => {
  if (shownAnswer) {
    return (
      <div className="card">
        <div className="card-header"><QuestionAnswer answer={question.answer} /></div>
        <div className="card-body">
          <QuestionExplanation explanation={question.explanation} />
        </div>
      </div>
    )
  }
  return <div></div>
}

export default AnswerDetails;
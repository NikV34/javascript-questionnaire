import React from 'react';
import { connect } from 'react-redux';

import {withMarkdown} from '../hoc';

import './answer-details.css';

const QuestionAnswer = ({answer}) => {
  return<h2 className="answer-details-headline">Right Answer: {answer + 1}</h2>
}

const QuestionExplanation = ({explanation}) => {
  return <div className="answer-details-explanation">{withMarkdown(explanation)}</div>
}

const AnswerDetails = ({questions, questionId}) => {
  const openedQuestionId = (!questionId && questions.length !== 0) ? questions[0].id : questionId;

  const openedQuestion = questions.find((question) => question.id === openedQuestionId);
  if (openedQuestion.status !== null) {
    return (
      <div className="answer-details">
        <QuestionAnswer answer={openedQuestion.answer} />
        <QuestionExplanation explanation={openedQuestion.explanation} />
      </div>
    )
  }
  return null
}

const mapStateToProps = ({
                           questionList: { questions, loading, error },
                           activeQuestion: { questionId } }) => {
  return {
    questions,
    loading,
    error,
    questionId
  }
}

export default connect(mapStateToProps)(AnswerDetails);
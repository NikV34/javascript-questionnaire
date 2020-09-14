import React from 'react';
import {connect} from 'react-redux';

import {withMarkdown} from '../hoc';

import './answer-details.css';

const QuestionAnswer = ({answer}) => {
  return<span>Answer: {answer + 1}</span>
}

const QuestionExplanation = ({explanation}) => {
  return withMarkdown(explanation)
}

const AnswerDetails = ({questions, questionId}) => {
  const openedQuestionId = (!questionId && questions.length !== 0) ? questions[0].id : questionId;

  const openedQuestion = questions.find((question) => question.id === openedQuestionId);
  if (openedQuestion.status !== null) {
    return (
      <div className="card">
        <div className="card-header">
          <QuestionAnswer answer={openedQuestion.answer} />
        </div>
        <div className="card-body">
          <QuestionExplanation explanation={openedQuestion.explanation} />
        </div>
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
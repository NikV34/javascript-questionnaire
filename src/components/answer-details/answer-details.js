import React from 'react';
import { connect } from 'react-redux';
import { answerQuestionId, questions, funcRequired } from '../../types';

import { withMarkdown } from '../hoc';

import './answer-details.css';

const QuestionAnswer = ({ answer }) => {
  return <h2 className="answer-details-headline">Right Answer: {answer + 1}</h2>
}

const QuestionExplanation = ({ explanation }) => {
  return <div className="answer-details-explanation">{ withMarkdown(explanation) }</div>
}

const AnswerDetails = ({ questions, questionId, onClearQuestionsStatus }) => {
  const openedQuestionId = (!questionId && questions.length !== 0) ? questions[0].id : questionId;

  const openedQuestion = questions.find((question) => question.id === openedQuestionId);
  if (openedQuestion.status !== null) {
    return (
      <div className="answer-details">
        <div className="answer-details-header">
          <QuestionAnswer answer={openedQuestion.answer} />
          <button type="button" className="question-details-button" onClick={ onClearQuestionsStatus } title="All your progress will be cleared">
              <span className="">Reset all</span>
          </button>
        </div>
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

AnswerDetails.propTypes = {
  questions: questions,
  questionId: answerQuestionId,
  onClearQuestionsStatus: funcRequired
}

export default connect(mapStateToProps)(AnswerDetails);
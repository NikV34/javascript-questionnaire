import React from 'react';
import { connect } from 'react-redux';
import { answerQuestionId, questions, funcRequired } from '../../types';

import { withMarkdown } from '../hoc';

import './answer-details.css';

const AnswerDetails = ({ questions, questionId, onClearQuestionsStatus }) => {
  const openedQuestionId = (!questionId && questions.length !== 0) ? questions[0].id : questionId;
  const openedQuestion = questions.find((question) => question.id === openedQuestionId);

  if (openedQuestion.status !== null) {
    return (
      <div className="answer-details">
        <div className="answer-details-header">
          <h2 className="answer-details-headline">Right Answer: #{openedQuestion.answer + 1}</h2>
          <button type="button" className="question-details-button" onClick={onClearQuestionsStatus} title="All your progress will be cleared">
            <span>Reset all</span>
          </button>
        </div>
        <div className="answer-details-explanation">{withMarkdown(openedQuestion.explanation)}</div>
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
import React from 'react';
import { connect } from 'react-redux';
import { questionAnswered } from '../../actions';
import { question, funcRequired } from '../../types';

import QuestionOptionListItem from '../question-option-list-item';

import './question-option-list.css';

const QuestionOptionList = ({ question, questionAnswered }) => {

  const onAnsweredQuestion = (optionId) => {
    //optionId !== index
    const result = optionId === question.answer + 1 ? true : false
    return questionAnswered(result, question.id, optionId - 1)
  }

  return (
    <div className="question-option-list">
      { question.option_list.map((option, idx) => {
        let optionStatus = null;
        if (idx === question.answeredOptionIndex && question.status === false) optionStatus = false;
        if (idx === question.answer && question.status !== null) optionStatus = true;

        const disabled = question.status !== null;

        return (
          <QuestionOptionListItem
            option={option}
            id={idx + 1}
            key={`${question.id}-${idx + 1}`}
            status={question.status}
            optionStatus={optionStatus}
            disabled={disabled}
            onAnsweredQuestion={onAnsweredQuestion}
          />
        )
      })
      }
    </div>
  );
};

QuestionOptionList.propTypes = {
  question: question.isRequired,
  questionAnswered: funcRequired
};

const mapStateToProps = ({ questionList: { questions }, activeQuestion: { questionId } }) => {
  const openedQuestionId = (!questionId && questions.length !== 0) ? questions[0].id : questionId;
  const question = questions.find((question) => question.id === openedQuestionId);
  return { question: { ...question } };
};

const mapDispatchToProps = (dispatch) => {
  return {
    questionAnswered: (result, id, answeredOptionIndex) => dispatch(questionAnswered(result, id, answeredOptionIndex))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionOptionList);
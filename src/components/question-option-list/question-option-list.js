import React from 'react';
import { question, funcRequired } from '../../types';

import QuestionOptionListItem from '../question-option-list-item';

import './question-option-list.css';

const QuestionOptionList = ({ question, onAnsweredQuestion }) => {
  return (
    <div className="question-option-list">
      { question.option_list.map((option, idx) => {
        let optionStatus = null;

        if (idx === question.answeredOptionIndex && question.status === false) {
          optionStatus = false;
        }

        if (idx === question.answer && question.status !== null) {
          optionStatus = true;
        }

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
  )
}

QuestionOptionList.propTypes = {
  question: question,
  onAnsweredQuestion: funcRequired
}

export default QuestionOptionList;
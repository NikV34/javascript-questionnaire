import React from 'react';

import QuestionOptionListItem from '../question-option-list-item';

import './question-option-list.css';

const QuestionOptionList = ({question, onAnsweredQuestion}) => {
  return (
    <div className="question-option-list">
      {question.option_list.map((option, idx) => {
        const checked = (question.status && idx === question.answer) ? true : null;
        const disabled = question.status !== null;

        return (
          <QuestionOptionListItem
            option={option}
            id={idx + 1}
            key={`${question.id}-${idx + 1}`}
            status={question.status}
            checked={checked}
            disabled={disabled}
            onAnsweredQuestion={onAnsweredQuestion}
          />
        )
      })}
    </div>
  )
}

export default QuestionOptionList;
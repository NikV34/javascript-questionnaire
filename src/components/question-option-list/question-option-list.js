import React from 'react';

import QuestionOptionListItem from '../question-option-list-item';

import './question-option-list.css';

const QuestionOptionList = ({options}) => {
  return (
    <div className="question-option-list">
      {options.map((option, idx) => {
        return (
          <QuestionOptionListItem option={option} id={idx + 1}/>
        )
      })}
    </div>
  )
}

export default QuestionOptionList;
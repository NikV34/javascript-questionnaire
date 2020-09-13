import React from 'react';

import './question-list-item.css';


const Question = ({id, content}) => {
  return <span>{`${id}. ${content}`}</span>;
}

const QuestionListItem = ({question}) => {

  return (
    <Question id={question.id} content={question.question} />
  )
};

export default QuestionListItem;
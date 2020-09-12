import React from 'react';

import QuestionListItem from "../question-list-item";

import './question-list.css';

const QuestionList = ({questionList}) => {
  const renderItems = questionList.slice(130, 138).map((question) => {
    return (
      <li key={question.id}>
        <QuestionListItem question={question} />
        <br/>
      </li>
    )
  });

  return <ul>{ renderItems }</ul>
};

export default QuestionList;
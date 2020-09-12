import React from 'react';

import Highlight from 'react-highlight.js';
import ReactMarkdown from 'react-markdown';

import './question-list-item.css';

const QuestionListItem = ({question}) => {
  return (
    <ul>
      <li>{question.id}. {question.question}</li>
      <li>
        <Highlight language={"javascript"}>{question.task}</Highlight>
      </li>
      <li>
        <ol>
          {question.option_list.map((option) => {
            return <li><ReactMarkdown source={option} escapeHtml={false} /></li>
          })}
        </ol>
      </li>
      <br/>
      <li>Answer: {question.answer + 1}</li>
      <li>
        <ReactMarkdown source={question.explanation} escapeHtml={false} />
      </li>
    </ul>
  )
};

export default QuestionListItem;
import React from 'react';

import withHighlighting from '../hoc/with-highlighting';
import QuestionOptionList from '../question-option-list';

import './question-details.css';


const QuestionTask = ({task}) => {
  return <span>{task}</span>;
}

const QuestionDetails = ({question, passed, onOpenedQuestion}) => {
  const HighlightedQuestionTask = withHighlighting(QuestionTask);

  return (
    <div className="card question-details">
      <div className="card-header">
        <h5>{`${question.id}. ${question.question}${passed ? "Passed" : ""}`}</h5>
      </div>
      <div className="card-body">
        <HighlightedQuestionTask task={question.task}/>
        <ol>
          <QuestionOptionList options={question.option_list} />
        </ol>
        <button href="#" className="btn btn-primary" onClick={onOpenedQuestion}>Go somewhere</button>
      </div>
    </div>
  );
}

export default QuestionDetails;
import React, {Component} from 'react';

import withHighlighting from '../hoc/with-highlighting';
import QuestionOptionList from '../question-option-list';

import './question-details.css';

const QuestionTask = ({task}) => {
  return <span>{task}</span>;
}

class QuestionDetails extends Component {

  render() {
    const {question, onQuestionPassed, onQuestionFailed} = this.props;
    const HighlightedQuestionTask = withHighlighting(QuestionTask);

    const onAnsweredQuestion = (optionId) => {
      if (optionId === question.answer + 1) {
        onQuestionPassed(question.id)
      } else {
        onQuestionFailed(question.id)
      }
    }

    return (
      <div className="card question-details">
        <div className="card-header">
          <h5>{`${question.id}. ${question.question}`}</h5>
        </div>
        <div className="card-body">
          <HighlightedQuestionTask task={question.task}/>
          <QuestionOptionList question={question} onAnsweredQuestion={onAnsweredQuestion}/>
        </div>
      </div>
    );
}
}

export default QuestionDetails;
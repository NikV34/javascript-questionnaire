import React, {Component} from 'react';

import withHighlighting from '../hoc/with-highlighting';
import QuestionOptionList from '../question-option-list';

import './question-details.css';

const QuestionTask = ({task}) => {
  return <span>{task}</span>;
}

class QuestionDetails extends Component {

  render() {
    const {question, onToggleQuestionOpened, questionAnswered} = this.props;
    const HighlightedQuestionTask = withHighlighting(QuestionTask);

    const onAnsweredQuestion = (optionId) => {
      //optionId != index
      if (optionId === question.answer + 1) {
        questionAnswered(true)
      } else {
        questionAnswered(false)
      }
    }

    return (
      <div className="col-md-6 col-12">
        <div className="card question-details">
          <div className="card-header">
            <h5>{`${question.id}. ${question.question}`}</h5>
          </div>
          <div className="card-body">
            <HighlightedQuestionTask task={question.task}/>
            <QuestionOptionList question={question} onAnsweredQuestion={onAnsweredQuestion}/>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-secondary" onClick={onToggleQuestionOpened('prev')}>Prev question</button>
              <button type="button" className="btn btn-primary" onClick={onToggleQuestionOpened('next')}>Next question</button>
            </div>
          </div>
        </div>
      </div>
    );
}
}

export default QuestionDetails;
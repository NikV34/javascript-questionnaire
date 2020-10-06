import React from 'react';
import PropTypes from 'prop-types';

import QuestionnaireProgress from "../questionnaire-progress";
import Results from '../results/results';

const QuestionnaireProgressContainer = ({ questions }) => {
  const total = questions.length;
  let progress = 0;
  let passed = 0;
  let failed = 0;
  for (let i of questions) {
    if (i.status) {
      progress ++;
      passed ++;
    }
    if (i.status === false) {
      progress ++;
      failed ++;
    }
  }

  return (
    <React.Fragment>
      <Results progress={progress}  total={total} passed={passed} failed={failed}/>
      <QuestionnaireProgress progress={progress}  total={total} />
    </React.Fragment>
  )
}

QuestionnaireProgressContainer.propTypes = {
  questions: PropTypes.shape({
    answer: PropTypes.number.isRequired,
    answeredOptionIndex: PropTypes.number,
    explanation: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    option_list: PropTypes.arrayOf(PropTypes.string).isRequired,
    question: PropTypes.string.isRequired,
    status: PropTypes.bool,
    task: PropTypes.string.isRequired
  }).isRequired
}

export default QuestionnaireProgressContainer;
import React from 'react';
import QuestionnaireProgress from "../questionnaire-progress";

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
    <QuestionnaireProgress progress={progress}  failed={failed} passed={passed} total={total} />
  )
}

export default QuestionnaireProgressContainer;
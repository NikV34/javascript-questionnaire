import React from 'react';
import { questionsType } from '../../types';

import QuestionnaireProgress from '../questionnaire-progress';
import Results from '../results/results';

const QuestionnaireProgressContainer = ({ questions }) => {
  const total = questions.length;
  let progress = 0;
  let passed = 0;
  let failed = 0;
  for (const i of questions) {
    if (i.status) {
      progress++;
      passed++;
    }
    if (i.status === false) {
      progress++;
      failed++;
    }
  }

  return (
    <>
      <Results
        progress={progress}
        total={total}
        passed={passed}
        failed={failed}
      />
      <QuestionnaireProgress progress={progress} total={total} />
    </>
  );
};

QuestionnaireProgressContainer.propTypes = { questions: questionsType };

export default QuestionnaireProgressContainer;

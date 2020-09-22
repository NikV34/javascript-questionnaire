import React from 'react';

import './questionnaire-progress.css';

const QuestionnaireProgress = ({ progress, total }) => {
  const style = {
    width: `${progress * 100 / total}%`
  }
  return (
    <div className="progress questionnaire-progress">
      <div className="progress-bar questionnaire-progress-bar" role="progressbar" style={style} aria-valuenow={progress} aria-valuemin="0"
            aria-valuemax={total}>{`${Math.floor(progress * 100 / total)}%`}
      </div>
    </div>
  )
}

export default QuestionnaireProgress;
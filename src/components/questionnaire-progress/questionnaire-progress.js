import React from 'react';

import './questionnaire-progress.css';

const QuestionnaireProgress = ({ progress, failed, passed, total }) => {
  const style = {
    width: `${progress * 100 / total}%`
  }
  return (
    <div>
      <ul>
        <li>Total: {total}</li>
        <li>Answered: {progress}</li>
        <li>Remaining: {total - progress}</li>
        <li>Passed: {passed}</li>
        <li>Failed: {failed}</li>
      </ul>
      <div className="progress questionnaire-progress">
        <div className="progress-bar" role="progressbar" style={style} aria-valuenow={progress} aria-valuemin="0"
             aria-valuemax={total}>{`${Math.floor(progress * 100 / total)}%`}
        </div>
      </div>
    </div>  )
}

export default QuestionnaireProgress;
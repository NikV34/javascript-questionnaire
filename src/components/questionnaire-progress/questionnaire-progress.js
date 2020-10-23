import React from 'react';
import PropTypes from 'prop-types';

import './questionnaire-progress.css';

const QuestionnaireProgress = ({ progress, total }) => {
  const style = {
    width: `${(progress * 100) / total}%`,
  };

  return (
    <div className="progress questionnaire-progress">
      <div
        className="progress-bar questionnaire-progress-bar"
        role="progressbar"
        style={style}
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax={total}
      />
    </div>
  );
};

QuestionnaireProgress.propTypes = {
  progress: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default QuestionnaireProgress;

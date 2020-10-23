import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { questionAnswered } from '../../actions';

import withMarkdown from '../hoc/with-markdown';
import QuestionOptionList from './question-option-list';

const QuestionOptionListContainer = ({
  answer,
  answeredOptionIndex,
  id,
  optionList,
  status,
  func,
}) => {
  const onAnswered = (optionId) => {
    // optionId === index + 1
    const result = optionId === answer + 1;
    return func(result, id, optionId - 1);
  };

  const disabled = status !== null;

  const extendedOptionList = optionList.map((option, idx) => {
    const number = idx + 1;

    let optionStatus = null;
    if (idx === answeredOptionIndex && status === false) optionStatus = false;
    if (idx === answer && status !== null) optionStatus = true;

    let statusClass = null;
    switch (optionStatus) {
      case true:
        statusClass = 'question-passed';
        break;
      case false:
        statusClass = 'question-failed';
        break;
      default:
        statusClass = '';
    }

    const disabledClass = disabled ? ' disabled' : '';
    const className = statusClass + disabledClass;

    return {
      number,
      className,
      questionId: id,
      content: withMarkdown(`${number}) ${option}`),
    };
  });

  return (
    <QuestionOptionList
      optionList={extendedOptionList}
      disabled={disabled}
      func={onAnswered}
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    func: (result, id, answeredOptionIndex) =>
      dispatch(questionAnswered(result, id, answeredOptionIndex)),
  };
};

QuestionOptionListContainer.propTypes = {
  answer: PropTypes.number.isRequired,
  answeredOptionIndex: PropTypes.number,
  id: PropTypes.number.isRequired,
  status: PropTypes.bool,
  optionList: PropTypes.arrayOf(PropTypes.string).isRequired,
  func: PropTypes.func.isRequired,
};

QuestionOptionListContainer.defaultProps = {
  answeredOptionIndex: null,
  status: null,
};

export default connect(null, mapDispatchToProps)(QuestionOptionListContainer);

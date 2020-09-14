import React from 'react';
import withMarkdown from '../hoc/with-markdown';

import './question-option-list-item.css';

const QuestionOptionListItem = ({option, id, onAnsweredQuestion, checked, disabled}) => {
  return (
    <div className="custom-control custom-radio" key={id} >
      <input
        type="radio"
        id={`customRadio${id}`}
        value={id}
        name="customRadio"
        className="custom-control-input"
        onClick={() => onAnsweredQuestion(id)}
        disabled={disabled}
        checked={checked}
      />
      <label className="custom-control-label" htmlFor={`customRadio${id}`}>
        {withMarkdown(`${id}) ${option}`)}
      </label>
      {checked ? <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.7143 12H1.28571C0.575625 12 0 11.4244 0 10.7143V1.28571C0 0.575625 0.575625 0 1.28571 0H10.7143C11.4244 0 12 0.575625 12 1.28571V10.7143C12 11.4244 11.4244 12 10.7143 12ZM5.23162 9.37342L10.1602 4.44485C10.3276 4.27749 10.3276 4.00612 10.1602 3.83877L9.55412 3.23269C9.38676 3.06533 9.11539 3.0653 8.94801 3.23269L4.92857 7.2521L3.05199 5.37552C2.88463 5.20816 2.61327 5.20816 2.44588 5.37552L1.8398 5.9816C1.67245 6.14896 1.67245 6.42032 1.8398 6.58768L4.62552 9.37339C4.7929 9.5408 5.06424 9.5408 5.23162 9.37342Z" fill="#3CEF10"/>
      </svg> : null}

    </div>
  )
}

export default QuestionOptionListItem;
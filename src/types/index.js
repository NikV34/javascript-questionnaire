import { arrayOf, func, shape, number, string, bool } from 'prop-types';

export const className = string.isRequired;

export const disabled = bool.isRequired;

export const id = number.isRequired;

export const navigationButtonRole = string.isRequired;

export const question = shape(
    {
    answer: number.isRequired,
    answeredOptionIndex: number,
    explanation: string.isRequired,
    id: number.isRequired,
    option_list: arrayOf(string).isRequired,
    question: string.isRequired,
    status: bool,
    task: string.isRequired
  }
);

export const questions = arrayOf(
    shape(
      {
        answer: number.isRequired,
        answeredOptionIndex: number,
        explanation: string.isRequired,
        id: number.isRequired,
        option_list: arrayOf(string).isRequired,
        question: string.isRequired,
        status: bool,
        task: string.isRequired
      }
    )
  );

export const questionOption = string.isRequired;

export const questionOptionStatus = bool;

export const progress = number.isRequired;

export const total = number.isRequired;

export const results = {
  progress: progress,
  total: total,
  passed: number.isRequired,
  failed: number.isRequired 
};

export const pagination = shape(
  {
    page: number.isRequired,
    size: number.isRequired,
    totalItems: number
  }
).isRequired;

export const funcRequired = func.isRequired;
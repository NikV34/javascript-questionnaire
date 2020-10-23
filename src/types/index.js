import { arrayOf, func, shape, number, string, bool } from 'prop-types';

export const answerQuestionId = number;

export const className = string.isRequired;

export const disabled = bool.isRequired;

export const error = bool;

export const loading = bool;

export const navigationButtonRole = string.isRequired;

export const questionType = shape({
  answer: number.isRequired,
  answeredOptionIndex: number,
  explanation: string.isRequired,
  id: number.isRequired,
  option_list: arrayOf(string).isRequired,
  question: string.isRequired,
  status: bool,
  task: string.isRequired,
});

export const questionDefault = {
  answer: null,
  answeredOptionIndex: null,
  explanation: '',
  id: null,
  option_list: [],
  question: '',
  status: null,
  task: '',
};

export const questionsType = arrayOf(questionType);

export const questionsDefault = [];

export const questionOption = string.isRequired;

export const questionOptionStatus = bool;

export const progress = number.isRequired;

export const total = number.isRequired;

export const results = {
  progress,
  total,
  passed: number.isRequired,
  failed: number.isRequired,
};

export const pagination = shape({
  page: number.isRequired,
  size: number.isRequired,
  totalItems: number,
}).isRequired;

export const funcRequired = func.isRequired;

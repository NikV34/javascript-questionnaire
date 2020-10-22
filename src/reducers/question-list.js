import { actionsType } from '../actions/index';

const questionList = (state, action) => {

  const initialQuestionList = {
    questions: [],
    loading: true,
    error: null
  };

  if (state === undefined) return initialQuestionList;

  switch (action.type) {
    case actionsType.FETCH_QUESTIONS_REQUEST:
      return {
        questions: [],
        loading: true,
        error: null
      };

    case actionsType.FETCH_QUESTIONS_SUCCESS:
      return {
        questions: action.payload,
        loading: false,
        error: null
      };

    case actionsType.FETCH_QUESTIONS_FAILURE:
      return {
        questions: [],
        loading: false,
        error: action.payload
      };

    case actionsType.FETCH_QUESTIONS_FROM_STORAGE_SUCCESS:
      return {
        questions: action.payload,
        loading: false,
        error: null
      };

    case actionsType.ANSWER_QUESTION_SUCCESS:
      return {
        ...state.questionList,
        questions: _updateQuestionStatus(state.questionList.questions, action.payload, true)
      };

    case actionsType.ANSWER_QUESTION_FAILURE:
      return {
        ...state.questionList,
        questions: _updateQuestionStatus(state.questionList.questions, action.payload, false)
      };

    case actionsType.CLEAR_QUESTIONS_STATUS:
      return {
        questions: _clearQuestionsStatus(state.questionList.questions),
        loading: false,
        error: null
      };

    default:
      if (state.questionList === undefined) return initialQuestionList;
      return { ...state.questionList };
  };
};

const _updateQuestionStatus = (questions, { questionId, answeredOptionIndex }, status) => {
  const question = questions.find(item => item.id === questionId);
  const questionIndex = questions.indexOf(question);

  question.status = status;
  question.answeredOptionIndex = answeredOptionIndex;

  return [
    ...questions.slice(0, questionIndex),
    question,
    ...questions.slice(questionIndex + 1)
  ];
};

const _clearQuestionsStatus = (questions) => {
  return questions.map((question) => {
    question.status = null;
    question.answeredOptionIndex = null;
    return question;
  });
};

export default questionList;
import store from 'store';

export const actionsType = {
  FETCH_QUESTIONS_REQUEST: 'FETCH_QUESTIONS_REQUEST',
  FETCH_QUESTIONS_SUCCESS: 'FETCH_QUESTIONS_SUCCESS',
  FETCH_QUESTIONS_FAILURE: 'FETCH_QUESTIONS_FAILURE',
  FETCH_QUESTIONS_FROM_STORAGE_SUCCESS: 'FETCH_QUESTIONS_FROM_STORAGE_SUCCESS',
  OPEN_QUESTION: 'OPEN_QUESTION',
  OPEN_PREV_QUESTION: 'OPEN_PREV_QUESTION',
  OPEN_NEXT_QUESTION: 'OPEN_NEXT_QUESTION',
  ANSWER_QUESTION_SUCCESS: 'ANSWER_QUESTION_SUCCESS',
  ANSWER_QUESTION_FAILURE: 'ANSWER_QUESTION_FAILURE',
  CLEAR_QUESTIONS_STATUS: 'CLEAR_QUESTIONS_STATUS',
  TOGGLE_START_NAVIGATION: 'TOGGLE_START_NAVIGATION',
  TOGGLE_PREV_NAVIGATION: 'TOGGLE_PREV_NAVIGATION',
  TOGGLE_NEXT_NAVIGATION: 'TOGGLE_NEXT_NAVIGATION',
  TOGGLE_END_NAVIGATION: 'TOGGLE_END_NAVIGATION',
};

const questionListTransform = (questions) => {
  return questions.map((question) => {
    const newQuestion = { ...question };
    newQuestion.status = null;
    newQuestion.answeredOptionIndex = null;
    return newQuestion;
  });
};

const questionsRequested = () => {
  return {
    type: actionsType.FETCH_QUESTIONS_REQUEST,
  };
};

const questionsLoaded = (newQuestions) => {
  store.set('questionsStored', true);

  return {
    type: actionsType.FETCH_QUESTIONS_SUCCESS,
    payload: questionListTransform(newQuestions),
  };
};

const questionsError = (error) => {
  return {
    type: actionsType.FETCH_QUESTIONS_FAILURE,
    payload: error,
  };
};

export const questionsFromLocalStorage = (questions) => {
  return {
    type: actionsType.FETCH_QUESTIONS_FROM_STORAGE_SUCCESS,
    payload: questions,
  };
};

export const fetchQuestions = (questionnaireService, dispatch) => () => {
  dispatch(questionsRequested());
  questionnaireService
    .getAllQuestions()
    .then((data) => dispatch(questionsLoaded(data)))
    .catch((err) => dispatch(questionsError(err)));
};

export const questionOpened = (questionId) => {
  return {
    type: actionsType.OPEN_QUESTION,
    payload: questionId,
  };
};

export const toggleQuestionOpened = (role, currentQuestionIndex) => {
  let type = '';
  if (role === 'prev') type = actionsType.OPEN_PREV_QUESTION;
  if (role === 'next') type = actionsType.OPEN_NEXT_QUESTION;

  return {
    type,
    payload: currentQuestionIndex,
  };
};

export const questionAnswered = (result, questionId, answeredOptionIndex) => {
  const type = result
    ? actionsType.ANSWER_QUESTION_SUCCESS
    : actionsType.ANSWER_QUESTION_FAILURE;

  return {
    type,
    payload: {
      questionId,
      answeredOptionIndex,
    },
  };
};

export const clearQuestionsStatus = () => {
  return {
    type: actionsType.CLEAR_QUESTIONS_STATUS,
  };
};

export const toggleQuestionListNavigation = (role) => {
  switch (role) {
    case 'start':
      return { type: actionsType.TOGGLE_START_NAVIGATION };
    case 'prev':
      return { type: actionsType.TOGGLE_PREV_NAVIGATION };
    case 'next':
      return { type: actionsType.TOGGLE_NEXT_NAVIGATION };
    case 'end':
      return { type: actionsType.TOGGLE_END_NAVIGATION };
    default:
      return { type: actionsType.TOGGLE_START_NAVIGATION };
  }
};

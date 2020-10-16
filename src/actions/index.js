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
}

const _questionListTransform = (questions) => {
  return questions.map((question) => {
    question.status = null;
    question.answeredOptionIndex = null;
    return question;
  })
}

const questionsRequested = () => {
  return {
    type: actionsType.FETCH_QUESTIONS_REQUEST
  }
};

const questionsLoaded = (newQuestions) => {
  store.set("questionsStored", true);
  return {
    type: actionsType.FETCH_QUESTIONS_SUCCESS,
    payload: _questionListTransform(newQuestions)
  };
};

const questionsError = (error) => {
  return {
    type: actionsType.FETCH_QUESTIONS_FAILURE,
    payload: error
  };
};

export const questionsFromLocalStorage = (questions) => {
  return {
    type: actionsType.FETCH_QUESTIONS_FROM_STORAGE_SUCCESS,
    payload: questions
  };
};

const fetchQuestions = (questionnaireService, dispatch) => () => {
  dispatch(questionsRequested());
  questionnaireService.getAllQuestions()
    .then((data) => dispatch(questionsLoaded(data)))
    .catch((err) => dispatch(questionsError(err)));
};

export const questionOpened = (questionId) => {
  return {
    type: actionsType.OPEN_QUESTION,
    payload: questionId
  };
};

export const toggleQuestionOpened = (actionType, currentQuestionIndex) => {
  if (actionType === 'prev') {
    return {
      type: actionType.OPEN_PREV_QUESTION,
      payload: currentQuestionIndex
    };
  }
  if (actionType === 'next') {
    return {
      type: actionType.OPEN_NEXT_QUESTION,
      payload: currentQuestionIndex
    };
  }
};

export const questionAnswered = (result, questionId, answeredOptionIndex) => {
  if (result) {
    return {
      type: actionsType.ANSWER_QUESTION_SUCCESS,
      payload: {
        questionId: questionId,
        answeredOptionIndex: answeredOptionIndex
      }
    };
  }
  return {
    type: actionsType.ANSWER_QUESTION_FAILURE,
    payload: {
      questionId: questionId,
      answeredOptionIndex: answeredOptionIndex
    }
  };
}

export const clearQuestionsStatus = () => {
  return {
    type: actionsType.CLEAR_QUESTIONS_STATUS
  }
}

export const toggleQuestionListNavigation = (actionType) => {
  switch (actionType) {
    case 'start':
      return { type: actionType.TOGGLE_START_NAVIGATION };
    case 'prev':
      return { type: actionType.TOGGLE_PREV_NAVIGATION };
    case 'next':
      return { type: actionType.TOGGLE_NEXT_NAVIGATION };
    case 'end':
      return { type: actionType.TOGGLE_END_NAVIGATION };
    default:
      return { type: actionType.TOGGLE_START_NAVIGATION };
  }
};

export {
  fetchQuestions
};

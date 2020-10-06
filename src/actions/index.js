
const _questionListTransform = (questions) => {
  return questions.map((question) => {
    question.status = null;
    question.answeredOptionIndex = null;
    return question;
  })
}

const questionsRequested = () => {
  return {
    type: 'FETCH_QUESTIONS_REQUEST'
  }
};

const questionsLoaded = (newQuestions) => {
  return {
    type: 'FETCH_QUESTIONS_SUCCESS',
    payload: _questionListTransform(newQuestions)
  };
};

const questionsError = (error) => {
  return {
    type: 'FETCH_QUESTIONS_FAILURE',
    payload: error
  };
};

export const questionsFromLocalStorage = (questions) => {
  return {
    type: 'FETCH_QUESTIONS_FROM_STORAGE_SUCCESS',
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
    type: 'OPEN_QUESTION',
    payload: questionId
  };
};

export const toggleQuestionOpened = (actionType, currentQuestionIndex) => {
  if (actionType === 'prev') {
    return {
      type: 'OPEN_PREV_QUESTION',
      payload: currentQuestionIndex
    };
  }
  if (actionType === 'next') {
    return {
      type: 'OPEN_NEXT_QUESTION',
      payload: currentQuestionIndex
    };
  }
};

export const questionAnswered = (result, questionId, answeredOptionIndex) => {
  if (result) {
    return {
      type: 'ANSWER_QUESTION_SUCCESS',
      payload: {
        questionId: questionId,
        answeredOptionIndex: answeredOptionIndex
      }
    };
  }
  return {
    type: 'ANSWER_QUESTION_FAILURE',
    payload: {
      questionId: questionId,
      answeredOptionIndex: answeredOptionIndex
    }
  };
}

export const toggleQuestionListNavigation = (actionType) => {
  switch (actionType) {
    case 'start':
      return { type: 'TOGGLE_START_NAVIGATION' };
    case 'prev':
      return { type: 'TOGGLE_PREV_NAVIGATION' };
    case 'next':
      return { type: 'TOGGLE_NEXT_NAVIGATION' };
    case 'end':
      return { type: 'TOGGLE_END_NAVIGATION' };
    default:
      return { type: 'TOGGLE_START_NAVIGATION' };
  }
};

export {
  fetchQuestions
};


const questionsRequested = () => {
  return {
    type: 'FETCH_QUESTIONS_REQUEST'
  }
};

const questionsLoaded = (newQuestions) => {
  return {
    type: 'FETCH_QUESTIONS_SUCCESS',
    payload: newQuestions
  };
};

const questionsError = (error) => {
  return {
    type: 'FETCH_QUESTIONS_FAILURE',
    payload: error
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
    type: 'OPENED_QUESTION',
    payload: questionId
  };
};

export {
  fetchQuestions
};

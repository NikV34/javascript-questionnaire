const updateQuestionStatus = (questions, { questionId, answeredOptionIndex }, status) => {
  const question = questions.find(item => item.id === questionId);
  const questionIndex = questions.indexOf(question)
  question.status = status;
  question.answeredOptionIndex = answeredOptionIndex;
  return [
    ...questions.slice(0, questionIndex),
    question,
    ...questions.slice(questionIndex + 1)
  ]
}

const updateQuestionList = (state, action) => {

  if (state === undefined) {
    return {
      questions: [],
      loading: true,
      error: null
    }
  }

  switch (action.type) {
    case 'FETCH_QUESTIONS_REQUEST':
      return {
        questions: [],
        loading: true,
        error: null
      };

    case 'FETCH_QUESTIONS_SUCCESS':
      return {
        questions: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_QUESTIONS_FAILURE':
      return {
        questions: [],
        loading: false,
        error: action.payload
      };

    case 'FETCH_QUESTIONS_FROM_STORAGE_SUCCESS':
      return {
        questions: action.payload,
        loading: false,
        error: null
      };

    case 'ANSWER_QUESTION_SUCCESS':
      return {
        ...state.questionList,
        questions: updateQuestionStatus(state.questionList.questions, action.payload, true)
      };

    case 'ANSWER_QUESTION_FAILURE':
      return {
        ...state.questionList,
        questions: updateQuestionStatus(state.questionList.questions, action.payload, false)
      };

    default:
      return state.questionList
  }
};

export default updateQuestionList;
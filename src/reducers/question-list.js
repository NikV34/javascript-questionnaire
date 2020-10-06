const _updateQuestionStatus = (questions, { questionId, answeredOptionIndex }, status) => {
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

const _clearQuestionsStatus = (questions) => {
  return questions.map((question) => {
    question.status = null;
    question.answeredOptionIndex = null;
    return question;
  })
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
        questions: _updateQuestionStatus(state.questionList.questions, action.payload, true)
      };

    case 'ANSWER_QUESTION_FAILURE':
      return {
        ...state.questionList,
        questions: _updateQuestionStatus(state.questionList.questions, action.payload, false)
      };

    case 'CLEAR_QUESTIONS_STATUS':
      return {
        questions: _clearQuestionsStatus(state.questionList.questions),
        loading: false,
        error: null
      };

    default:
      return state.questionList
  }
};

export default updateQuestionList;
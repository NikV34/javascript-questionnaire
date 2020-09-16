const updateQuestionStatus = (questions, id, status) => {
  const question = questions.find(item => item.id === id);
  const questionIndex = questions.indexOf(question)
  question.status = status;
  return [
    ...questions.slice(0, questionIndex),
    question,
    ...questions.slice(questionIndex + 1)
  ]
}

const togglePrevQuestionList = (questions, page) => {
  if (!page) {
    return 0
  } 
  return page - 1;
}

const toggleNextQuestionList = (questions, page) => {
  if (page < Math.floor(questions.length / 15)) {
    return page + 1 
  } 
  return page;
}

const updateQuestionList = (state, action) => {

  if (state === undefined) {
    return {
      questions: [],
      page: 0,
      loading: true,
      error: null
    }
  }

  switch (action.type) {

    case 'FETCH_QUESTIONS_REQUEST':
      return {
        questions: [],
        page: 0,
        loading: true,
        error: null
      };

    case 'FETCH_QUESTIONS_SUCCESS':
      return {
        questions: action.payload,
        page: 0,
        loading: false,
        error: null
      };

    case 'FETCH_QUESTIONS_FAILURE':
      return {
        questions: [],
        page: 0,
        loading: false,
        error: action.payload
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

    case 'TOGGLE_PREV_NAVIGATION':
      return {
        ...state.questionList,
        page: togglePrevQuestionList(state.questionList.questions, state.questionList.page)
      }

    case 'TOGGLE_NEXT_NAVIGATION':
    return {
      ...state.questionList,
      page: toggleNextQuestionList(state.questionList.questions, state.questionList.page)
    }

    default:
      return state.questionList
  }
};

export default updateQuestionList;
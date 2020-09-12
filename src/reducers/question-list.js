const updateQuestionList = (state, action) => {

  if (state === undefined) {
    return {
      questionList: [],
      loading: true,
      error: null
    }
  }

  switch (action.type) {

    case 'FETCH_QUESTIONS_REQUEST':
      return {
        questionList: [],
        loading: true,
        error: null
      };

    case 'FETCH_QUESTIONS_SUCCESS':
      return {
        questionList: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_QUESTIONS_FAILURE':
      return {
        questionList: [],
        loading: false,
        error: action.payload
      };

    default:
      return {
        questionList: state.questionList
      }
  }
};

export default updateQuestionList;
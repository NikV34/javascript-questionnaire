const updateActiveQuestion = (state, action) => {

  if (state === undefined) {
    return {
      questionId: null,
    }
  }

  switch (action.type) {

    case 'OPEN_QUESTION':
      let newActiveQuestion = {...state.activeQuestion};
      newActiveQuestion.questionId = action.payload;
      return {
        ...newActiveQuestion,
        ...state.questionList
      };

    default:
      return state.activeQuestion
  }
};

export default updateActiveQuestion;
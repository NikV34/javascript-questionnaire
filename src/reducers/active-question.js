const updateActiveQuestion = (state, action) => {

  if (state === undefined) {
    return {
      questionId: 131,
      passed: null,
      shownAnswer: true
    }
  }

  switch (action.type) {

    case 'OPENED_QUESTION':
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
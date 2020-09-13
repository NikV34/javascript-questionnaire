const updateActiveQuestion = (state, action) => {

  if (state === undefined) {
    return {
      questionId: 130,
      passed: null,
      shownAnswer: true
    }
  }

  switch (action.type) {

    case 'OPENED_QUESTION':
      console.log(action.payload)
      let newActiveQuestion = {...state.activeQuestion};
      newActiveQuestion.questionId = action.payload;
      console.log(newActiveQuestion)
      return {
        ...newActiveQuestion,
        ...state.questionList
      };

    default:
      return state.activeQuestion
  }
};

export default updateActiveQuestion;
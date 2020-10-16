import { actionsType } from '../actions/index';

const updateActiveQuestion = (state, action) => {

  if (state === undefined) {
    return {
      questionId: null,
    }
  }

  switch (action.type) {

    case actionsType.OPEN_QUESTION:
      let newActiveQuestion = {...state.activeQuestion};
      newActiveQuestion.questionId = action.payload;
      return {
        ...newActiveQuestion
      };

    default:
      return state.activeQuestion
  }
};

export default updateActiveQuestion;
import { actionsType } from '../actions/index';

const activeQuestion = (state, action) => {
  if (state === undefined) return { questionId: null };

  switch (action.type) {
    case actionsType.OPEN_QUESTION:
      return { questionId: action.payload };

    case actionsType.OPEN_PREV_QUESTION:
      const currentIndex = action.payload;
      if (currentIndex === 0) return { ...state.activeQuestion };
      return { questionId: state.questionList.questions[currentIndex - 1].id };

    case actionsType.OPEN_NEXT_QUESTION:
      const curIndex = action.payload;
      if (curIndex === state.questionList.questions.length - 1) return { ...state.activeQuestion };
      return { questionId: state.questionList.questions[curIndex + 1].id };

    default:
      if (state.activeQuestion === undefined) return { questionId: null };
      return state.activeQuestion;
  };
};

export default activeQuestion;
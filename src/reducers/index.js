import { actionsType } from '../actions/index';

import updateQuestionList from './question-list';
import updateActiveQuestion from './active-question';
import updatePagination from './update-pagination';

const reducer = (state, action) => {

  switch (action.type) {

    case actionsType.OPEN_PREV_QUESTION:
      const currentIndex = action.payload;
      if (currentIndex === 0) {
        return {
          ...state
        };
      } else {
        const currentPage = state.pagination.page;
        return {
          ...state,
          activeQuestion: { questionId: state.questionList.questions[currentIndex - 1].id },
          pagination: {
            ...state.pagination,
            page: currentPage * state.pagination.size > currentIndex - 1 ? currentPage - 1 : currentPage
          }
        };
      }

    case actionsType.OPEN_NEXT_QUESTION:
      const curIndex = action.payload;
      if (curIndex === state.questionList.questions.length - 1) {
        return {
          ...state
        };
      } else {
        const currentPage = state.pagination.page;
        return {
          ...state,
          activeQuestion: { questionId: state.questionList.questions[curIndex + 1].id },
          pagination: {
            ...state.pagination,
            page: currentPage * state.pagination.size + 9 < curIndex + 1 ? currentPage + 1 : currentPage
          }
        };
      }

    default:
      return {
        questionList: updateQuestionList(state, action),
        activeQuestion: updateActiveQuestion(state, action),
        pagination: updatePagination(state, action)
      };
  }
};

export default reducer;
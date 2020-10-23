import { actionsType } from '../actions/index';

const pagination = (state, action) => {
  if (state === undefined) {
    return {
      page: 0,
      size: 10,
      totalItems: 10,
    };
  }

  switch (action.type) {
    case actionsType.OPEN_PREV_QUESTION:
      const currentIndex = action.payload;
      if (currentIndex === 0) return { ...state.pagination };

      const currentPage = state.pagination.page;
      return {
        ...state.pagination,
        page:
          currentPage * state.pagination.size > currentIndex - 1
            ? currentPage - 1
            : currentPage,
      };

    case actionsType.OPEN_NEXT_QUESTION:
      const curIndex = action.payload;
      if (curIndex === state.questionList.questions.length - 1)
        return { ...state.pagination };

      const curPage = state.pagination.page;
      return {
        ...state.pagination,
        page:
          curPage * state.pagination.size + 9 < curIndex + 1
            ? curPage + 1
            : curPage,
      };

    case actionsType.TOGGLE_START_NAVIGATION:
      return {
        ...state.pagination,
        page: 0,
      };

    case actionsType.TOGGLE_PREV_NAVIGATION:
      return {
        ...state.pagination,
        page: _togglePrevQuestionList(state.pagination.page),
        totalItems: state.questionList.questions.length,
      };

    case actionsType.TOGGLE_NEXT_NAVIGATION:
      const totalItems = state.questionList.questions.length;
      return {
        ...state.pagination,
        page: _toggleNextQuestionList(state.pagination, totalItems),
        totalItems,
      };

    case actionsType.TOGGLE_END_NAVIGATION:
      return {
        ...state.pagination,
        page: Math.floor(
          state.questionList.questions.length / state.pagination.size
        ),
      };

    default:
      if (state.pagination === undefined) {
        return {
          page: 0,
          size: 10,
          totalItems: 10,
        };
      }
      return state.pagination;
  }
};

const _togglePrevQuestionList = (page) => {
  if (!page) return 0;
  return page - 1;
};

const _toggleNextQuestionList = ({ page, size }, totalItems) => {
  if (page < Math.floor(totalItems / size)) return page + 1;
  return page;
};

export default pagination;

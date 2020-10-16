import { actionsType } from '../actions/index';

const togglePrevQuestionList = (page) => {
  if (!page) {
    return 0
  }
  return page - 1;
}

const toggleNextQuestionList = ({ page, size }, totalItems) => {
  if (page < Math.floor(totalItems / size)) {
    return page + 1
  }
  return page;
}

const updatePagination = (state, action) => {
  if (state === undefined) {
    return {
      page: 0,
      size: 10,
      totalItems: undefined
    }
  }

  switch (action.type) {
    
    case actionsType.TOGGLE_START_NAVIGATION:
      return {
        ...state.pagination,
        page: 0,
      }

    case actionsType.TOGGLE_PREV_NAVIGATION:
      return {
        ...state.pagination,
        page: togglePrevQuestionList(state.pagination.page),
        totalItems: state.questionList.questions.length
      }

    case actionsType.TOGGLE_NEXT_NAVIGATION:
      const totalItems = state.questionList.questions.length;
      return {
        ...state.pagination,
        page: toggleNextQuestionList(state.pagination, totalItems),
        totalItems: totalItems
      }

    case actionsType.TOGGLE_END_NAVIGATION:
    return {
      ...state.pagination,
      page: Math.floor(state.questionList.questions.length / state.pagination.size),
    }

    default:
      return state.pagination
  }
}

export default updatePagination;

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
      size: 5,
      totalItems: undefined
    }
  }

  switch (action.type) {
    case 'TOGGLE_PREV_NAVIGATION':
      return {
        ...state.pagination,
        page: togglePrevQuestionList(state.pagination.page),
        totalItems: state.questionList.questions.length
      }

    case 'TOGGLE_NEXT_NAVIGATION':
      const totalItems = state.questionList.questions.length;
      return {
        ...state.pagination,
        page: toggleNextQuestionList(state.pagination, totalItems),
        totalItems: totalItems
      }

    default:
      return state.pagination
  }
}

export default updatePagination;
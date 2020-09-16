import updateQuestionList from './question-list';
import updateActiveQuestion from './active-question';
import updatePagination from './update-pagination';

const reducer = (state, action) => {
  return {
    questionList: updateQuestionList(state, action),
    activeQuestion: updateActiveQuestion(state, action),
    pagination: updatePagination(state, action)
  };
};

export default reducer;
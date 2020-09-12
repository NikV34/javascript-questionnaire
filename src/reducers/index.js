import updateQuestionList from './question-list';

const reducer = (state, action) => {
  return {
    questionList: updateQuestionList(state, action)
  };
};

export default reducer;
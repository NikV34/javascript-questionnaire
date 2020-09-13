import updateQuestionList from './question-list';
import updateActiveQuestion from './active-question';

const reducer = (state, action) => {
  return {
    questionList: updateQuestionList(state, action),
    activeQuestion: updateActiveQuestion(state, action)
  };
};

export default reducer;
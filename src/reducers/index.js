import questionList from './question-list';
import activeQuestion from './active-question';
import pagination from './update-pagination';

const reducer = (state, action) => {
  return combineReducers(state, action, {
    questionList,
    activeQuestion,
    pagination
  })
};

const combineReducers = (state, action, reducers) => {
  for (let key in reducers) {
    if (reducers.hasOwnProperty(key)) {
      reducers[key] = reducers[key](state, action);
    };
  };

  return reducers;
}

export default reducer;

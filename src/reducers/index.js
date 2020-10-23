import questionList from './question-list';
import activeQuestion from './active-question';
import pagination from './update-pagination';

const combineReducers = (state, action, reducers) => {
  const newReducers = {};
  Object.entries(reducers).forEach(([key, value]) => {
    newReducers[key] = value(state, action);
  });
  return newReducers;
};

const reducer = (state, action) => {
  return combineReducers(state, action, {
    questionList,
    activeQuestion,
    pagination,
  });
};

export default reducer;

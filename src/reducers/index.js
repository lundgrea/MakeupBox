import { combineReducers } from 'redux';
import  { errorsReducer } from './errors';
import { loadingReducer } from './loading';
import { resultsReducer } from './results';
import { responseReducer } from './responses';

const rootReducer = combineReducers({
  hasErrored: errorsReducer,
  isLoading: loadingReducer,
  results: resultsReducer,
  responses: responseReducer
});

export default rootReducer;
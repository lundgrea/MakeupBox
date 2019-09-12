import { combineReducers } from 'redux';
import  { errorsReducer } from './errors';
import { loadingReducer } from './loading'

const rootReducer = combineReducers({
  hasErrored: errorsReducer,
  isLoading: loadingReducer
});

export default rootReducer;
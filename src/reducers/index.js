import { combineReducers } from 'redux';
import  { errorsReducer } from './errors';

const rootReducer = combineReducers({
  error: errorsReducer
});

export default rootReducer;
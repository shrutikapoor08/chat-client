import { combineReducers } from 'redux';
import clientReducer from './clientReducer';
import serverReducer from './serverReducer';

const rootReducer = combineReducers({
  clientReducer,
  serverReducer
});

export default rootReducer;

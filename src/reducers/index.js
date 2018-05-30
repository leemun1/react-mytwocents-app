import { combineReducers } from 'redux';
import sessionReducer from './session';
import userReducer from './user';
import jarReducer from './jar';

const rootReducer = combineReducers({
  jarState: jarReducer,
  sessionState: sessionReducer,
  userState: userReducer,
});

export default rootReducer;

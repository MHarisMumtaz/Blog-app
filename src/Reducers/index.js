import { combineReducers } from 'redux'
import blogs from './blogs';
import comments from './comments';
import users from './users';

const rootReducer = combineReducers({
  blogs,
  comments,
  users
});

export default rootReducer;
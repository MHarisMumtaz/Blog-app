import { combineReducers } from 'redux'
import blogs from './blogs';
import comments from './comments';

const rootReducer = combineReducers({
  blogs,
  comments
});

export default rootReducer;
import { combineReducers } from 'redux';
import postReducers from './postReducer';
import userReducer from './userReducer';

/* Rules of Reducers:
 * Must return any value besides of 'undefined'
 * Produces state only using the previous state and the action.
 * Reducers are pure, i.e must not reach out of itself.
 * Must not mutate it's state argument.
 */

/* Export the reducers here.
 * This is the redux store variables with the returning
 * values from the reducers.
 */
export default combineReducers({
  posts: postReducers,
  users: userReducer,
});

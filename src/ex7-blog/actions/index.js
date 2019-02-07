import _ from 'lodash';
import jsonPlaceholder from '../apis/jasonPlaceholder';

/* For actions that need async request, we use redux-thunk.
 * If a function is returned instead of an action object,
 * we have direct access to the dispatch and getState function of redux.
 */
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  /* Re-send an action to the dispatch when the async request finishes.
   * besides calling the reducers directly.
   */
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};

/* To fix overfetching, we can make a new action creators that "calls" both
 * action creators and process the data. It must be manually dispatched,
 * because it's not connected to redux.
 */
export const fetchPostAndUsers = () => async (dispatch, getState) => {
  // We must wait for posts before use them.
  await dispatch(fetchPosts());
  // List with unique Ids.
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // For each uniqu id, fetch the user data.
  userIds.forEach(id => dispatch(fetchUser(id)));
};

/* Memoized fetch to prevent repeated request to the same endpoint.
 * Only work for static endpoints. If the response changes, this action
 * creator won't fetch the new data.
 * 
  export const fetchUser = id => dispatch => {
    _fetchUser(id, dispatch);
  };
  const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
  });
*/

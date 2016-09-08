import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { feed, post, tab, user, root } from './modules'
const middleware = applyMiddleware(thunk);

export default (data = {}) => {
  const rootReducer = combineReducers({
    //every modules reducer should be define here
    // [post.NAME]: post.reducer,
    [feed.NAME]: feed.reducer,
    [tab.NAME]: tab.reducer,
    [root.NAME]: root.reducer,
    // [app.NAME]: app.reducer,
    [user.NAME]: user.reducer
  })

  return createStore(rootReducer, data, middleware)
}

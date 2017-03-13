import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import{ browserHistory } from 'react-router';
import { rootReducer } from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

//create object for default data
  const defaultState = {
    posts,
    comments
  };

  const store = createStore(rootReducer, defaultState);

  export const histroy = syncHistoryWithStore(browserHistory, store)

  export default store;

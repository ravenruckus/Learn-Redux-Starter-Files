import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import{ browserHistory } from 'react-router';
import { default as rootReducer } from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

//create object for default data
  const defaultState = {
    posts,
    comments
  };
  const store = createStore(rootReducer, defaultState);

  export const history = syncHistoryWithStore(browserHistory, store)
  //
  // if(module.hot) {
  //   module.hot.accept('./reducers', () => {
  //     const nextRootReducer = required('./reducers/index').default;
  //     store.replaceReducer(nextRootReducer)
  //   })
  // }

  export default store;

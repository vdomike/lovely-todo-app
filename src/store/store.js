import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

import rootReducer from './reducers/index';
import fbConfig from '../fbConfig';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
/* eslint-enable */

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk.withExtraArgument({
      getFirebase,
      getFirestore
    })
  ),
  reduxFirestore(fbConfig),
  reactReduxFirebase(fbConfig, {
    useFirestoreForProfile: true,
    userProfile: 'users'
  })
);

const configureStore = preloadedState =>
  createStore(rootReducer, preloadedState, enhancer);

const store = configureStore({});

export default store;

import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import todos from './todos';
import books from './books';
import quotes from './quotes';
import auth from './auth';

const rootReducers = combineReducers({
  todos,
  books,
  quotes,
  auth,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducers;

import firebase from '../../fbConfig';

import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from '../constants';

export const signIn = ({ email, password }) => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch(error => {
        dispatch({ type: LOGIN_ERROR, error });
      });
  };
};

export const signUp = ({ email, password, firstName, lastName }) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        return firestore
          .collection('users')
          .doc(response.user.uid)
          .set({
            firstName,
            lastName
          });
      })
      .then(() => {
        dispatch({ type: SIGNUP_SUCCESS });
      })
      .catch(error => {
        dispatch({ type: SIGNUP_ERROR, error });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGNOUT_SUCCESS });
      });
  };
};

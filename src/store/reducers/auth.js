import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from '../constants';

const initState = {
  authError: null
};

const auth = (state = initState, { type, error }) => {
  switch (type) {
    case LOGIN_ERROR:
      return {
        state,
        authError: error.message
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        authError: null
      };
    case SIGNOUT_SUCCESS:
      return state;
    case SIGNUP_ERROR:
      return {
        ...state,
        authError: error.message
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        authError: null
      };
    default:
      return state;
  }
};

export default auth;

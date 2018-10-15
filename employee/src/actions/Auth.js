import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  ACTION_EMAIL_CHANGED,
  ACTION_PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_LOADING_YES,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FORM_REFRESH
} from './types';

export const emailChanged = (text) => {
  return {
    type: ACTION_EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: ACTION_PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_LOADING_YES });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        loginUserFail(dispatch);
      });
  };
};

export const registerUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_LOADING_YES });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: user
        });
        Actions.main(); // move to Employee List scence
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_FAIL,
          payload: { error: err.message }
        });
      });
  };
};

export const loginFormRefresh = () => {
  return {
    type: LOGIN_FORM_REFRESH
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main(); // move to Employee List scence
};

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL
  });
};


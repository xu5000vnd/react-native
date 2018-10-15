import {
  ACTION_EMAIL_CHANGED,
  ACTION_PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_LOADING_YES,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FORM_REFRESH

} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case ACTION_PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_LOADING_YES:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload
      };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false };
    case REGISTER_FAIL:
      return { ...state, error: action.payload.error, loading: false };
    case LOGIN_FORM_REFRESH:
      return INITIAL_STATE;
    default:
      return state;
  }
};

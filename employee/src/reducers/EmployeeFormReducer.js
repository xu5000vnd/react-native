import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_LOADING_YES,
  EMPLOYEE_LOADING_NO,
  EMPLOYEE_REFRESH
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_LOADING_YES:
      return { ...state, loading: true };
    case EMPLOYEE_LOADING_NO:
      return { ...state, loading: false };
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;
    case EMPLOYEE_REFRESH:
      return INITIAL_STATE;
    default:
      return state;
  }
};

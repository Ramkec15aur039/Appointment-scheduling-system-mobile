import {
  POST_USERS_REQUEST,
  POST_USERS_SUCCESS,
  POST_USERS_FAILURE,
} from './loginTypes';

const initialState = {
  loading: false,
  storeLoginResponse: '',
  error: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_USERS_SUCCESS:
      return {
        loading: false,
        storeLoginResponse: action.payload,
        error: '',
      };
    case POST_USERS_FAILURE:
      return {
        loading: false,
        storeLoginResponse: '',
        error: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;

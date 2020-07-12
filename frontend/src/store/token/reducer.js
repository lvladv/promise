import {
  PUT_NEW_TOKEN,
  ERROR_REQUEST,
  PUT_NEW_TOKEN_FROM_REFRESH,
  EXIT_ACCAUNT,
  CLOSE_ERROR,
} from "./action";
const hasToken = localStorage.getItem("remember");
const initialState = {
  token: hasToken,
  isAutorisation: Boolean(hasToken) ,
  errorAutorisation: false,
};
export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_NEW_TOKEN:
      return {
        ...state,
        token: action.payload,
        isAutorisation: true,
      };
    case PUT_NEW_TOKEN_FROM_REFRESH:
      return {
        ...state,
        token: action.payload,
        isAutorisation: true,
      };

    case EXIT_ACCAUNT:
      return {
        ...state,
        isAutorisation: false,
      };

    case ERROR_REQUEST:
      return {
        ...state,
        isAutorisation: false,
        errorAutorisation: true,
      };
    case CLOSE_ERROR: {
      return {
        ...state,
        errorAutorisation: false,
      };
    }

    default:
      return state;
  }
};

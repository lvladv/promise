import {
  PUT_NEW_TOKEN,
  ERROR_REQUEST,
  PUT_NEW_TOKEN_FROM_REFRESH,
  EXIT_ACCAUNT,
} from "./action";
const hasToken = localStorage.getItem("Authorization");
const initialState = {
  token: hasToken,
  isAutorisation: hasToken === null ? false : true,
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
      };

    default:
      return state;
  }
};

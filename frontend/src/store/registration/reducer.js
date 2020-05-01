import { REGISTRATION, INPUT_ERROR, ERROR_LOGIN, CLOSE_ERROR } from "./action";

const initialState = {
  token: "",
  errors: {
    errorLogin: false,
    inputError: false,
  },
};

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION:
      return {
        ...state,
        token: action.payload,
      };

    case INPUT_ERROR:
      return {
        ...state,
        errors: { ...state.errors, inputError: true },
      };
    case ERROR_LOGIN:
      return {
        ...state,
        errors: { ...state.errors, errorLogin: true },
      };

    case CLOSE_ERROR:
      return {
        ...state,
        errors: { ...state.errors, errorLogin: false, inputError: false },
      };

    default:
      return state;
  }
};

import {
  REGISTRATION,
  ERROR_VALID_EMAIL,
  ERROR_LOGIN,
  ERROR_PASSWORD,
  ERROR_PASSWORD_LOGIN,
  ERROR_PASSWORD_EMAIL,
  ERROR_PASSWORD_SHORT,
  ERROR_LOGIN_CHAR,
} from "./action";

const initialState = {
  token: "",
  errors: {
    validEmail: false,
    // closeValidEmail :
    errorLogin: false,
    errorLoginChar: false,
    errorPassword: false,
    errorPasswordLogin: false,
    errorPasswordEmail: false,
    errorPasswordShort: false,
  },
};

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION:
      return {
        ...state,
        token: action.payload,
      };

    case ERROR_VALID_EMAIL:
      return {
        ...state,
        errors: { ...state.errors, validEmail: true },
      };
    case ERROR_LOGIN:
      return {
        ...state,
        errors: { ...state.errors, errorLogin: true },
      };
    case ERROR_PASSWORD:
      return {
        ...state,
        errors: { ...state.errors, errorPassword: true },
      };
    case ERROR_PASSWORD_LOGIN:
      return {
        ...state,
        errors: { ...state.errors, errorPasswordLogin: true },
      };
    case ERROR_LOGIN_CHAR:
      return {
        ...state,
        errors: { ...state.errors, errorLoginChar: true },
      };
    case ERROR_PASSWORD_EMAIL:
      return {
        ...state,
        errors: { ...state.errors, errorPasswordEmail: true },
      };
    case ERROR_PASSWORD_SHORT:
      return {
        ...state,
        errors: { ...state.errors, errorPasswordShort: true },
      };

    default:
      return state;
  }
};

import {
  REGISTRATION,
  INPUT_ERROR,
  ERROR_LOGIN,
  CLOSE_ERROR,
  ERROR_EMAIL,
  OK_REGISTRATION,
} from "./action";

const initialState = {
  token: "",
  okRegistration: false,
  errors: {
    errorLogin: false,
    errorEmail: false,
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
    case ERROR_EMAIL:
      return {
        ...state,
        errors: { ...state.errors, errorEmail: true },
      };
    case OK_REGISTRATION:
      return {
        ...state,
        okRegistration: true,
      };

    case CLOSE_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          errorLogin: false,
          inputError: false,
          errorEmail: false,
        },
      };

    default:
      return state;
  }
};

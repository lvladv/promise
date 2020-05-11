import {
  REGISTRATION,
  INPUT_ERROR,
  ERROR,
  CLOSE_ERROR,
  OK_REGISTRATION,
} from "./action";

const initialState = {
  token: "",
  okRegistration: false,
  errors: {
    inputError: false,
    error: false,
    errorLoginValue: "",
    errorEmailValue: "",
    errorPasswordValue: "",
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
    case ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          error: true,
          errorLoginValue: action.login,
          errorEmailValue: action.email,
          errorPasswordValue: action.password,
        },
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
          error: false,
          inputError: false,
        },
      };

    default:
      return state;
  }
};

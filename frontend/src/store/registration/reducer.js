import { REGISTRATION } from "./action";

const initialState = {
  token: "",
  isAutorisation: false
};

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION:
      return {
        ...state,
        token: action.payload,
        isAutorisation: true
      };

    default:
      return state;
  }
};

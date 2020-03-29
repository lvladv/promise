import { PUT_NEW_TOKEN } from "./action";

const initialState = {
  token: "",
  isAutorisation: false
};

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_NEW_TOKEN:
      return {
        ...state,
        token: action.payload,
        isAutorisation: true
      };

    default:
      return state;
  }
};

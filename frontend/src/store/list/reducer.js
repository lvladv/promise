import { GET_LIST, PUT_NEW_POINT_LIST } from "./action";

const initialState = {
  list: []
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        list: action.payload
      };
    case PUT_NEW_POINT_LIST:
      return {
        ...state,
        list: [action.payload, ...state.list]
      };
    default:
      return state;
  }
};

import { OPEN_NEW_CARD, CLOSE_NEW_CARD } from "./action";

const initialState = {
  isOpenNewCard: false,
};

export const newCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_NEW_CARD:
      return {
        ...state,
        isOpenNewCard: action.payload,
      };

    case CLOSE_NEW_CARD:
      return {
        ...state,
        isOpenNewCard: action.payload,
      };
    default:
      return state;
  }
};

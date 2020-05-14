import { format } from "date-fns";

import {
  OPEN_NEW_CARD,
  CLOSE_NEW_CARD,
  IMPORTANCE_CHANGE,
  DEADLINE_CHANGE,
  DEADLINE_TIME_CHANGE,
  OPEN_NEW_CATEGORY,
} from "./action";

const initialState = {
  isOpenNewCard: false,
  importance: 1,
  deadline: format(new Date(), "yyyy-MM-dd"),
  deadlineTime: "00:00",
  newCategory: false,
  getCategory: "",
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

    case IMPORTANCE_CHANGE:
      return {
        ...state,
        importance: action.payload,
      };
    case DEADLINE_CHANGE:
      return {
        ...state,
        deadline: action.payload,
      };
    case DEADLINE_TIME_CHANGE:
      return {
        ...state,
        deadlineTime: action.payload,
      };
    case OPEN_NEW_CATEGORY:
      return {
        ...state,
        newCategory: !state.newCategory,
      };
    default:
      return state;
  }
};

import moment from 'moment';

import {
  OPEN_NEW_CARD,
  CLOSE_NEW_CARD,
  IMPORTANCE_CHANGE,
  DEADLINE_CHANGE,
  DEADLINE_TIME_CHANGE,
 
} from "./action";

const initialState = {
  isOpenNewCard: false,
  importance: "L",
  deadline: moment(new Date()).format("YYYY-MM-DD"),
  deadlineTime: "00:00",
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
   
    default:
      return state;
  }
};

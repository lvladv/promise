import { GET_CATEGORY_LIST, PUT_NEW_CATEGORY, CATEGORY_CHANGE } from "./action";

const initialState = {
  categoryList: [],
  category: 0,
};

export const categoryListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_LIST:
      return {
        ...state,
        categoryList: action.payload,
      };
    case PUT_NEW_CATEGORY:
      return {
        ...state,
        categoryList: [...state.categoryList, action.payload],
      };

    case CATEGORY_CHANGE:
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
};

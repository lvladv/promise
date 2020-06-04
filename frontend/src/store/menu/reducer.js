import { CLICK_CATEGORY, CLICK_IMPORTANCE } from "./action";

const initialState = {
  isOpenCategory: false,
  isOpenImportance: false,
};

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_CATEGORY:
      return {
        ...state,
        isOpenCategory: !state.isOpenCategory,
      };

    case CLICK_IMPORTANCE:
      return {
        ...state,
        isOpenImportance: !state.isOpenImportance,
      };

    default:
      return state;
  }
};

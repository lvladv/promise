import {
  OPEN_CHANGES_CARD,
  CLOSE_CHANGES_CARD,
  PUT_ITEM_CHANGE,
  NEW_ITEM_NAME,
  NEW_ITEM_DESCRIPTION,
  PUT_NEW_CHANGE_CATEGORY,
  PUT_HANDLE_CHANGE_IMPORTANCE,
} from "./action";

const initialState = {
  isOpenChangesCard: false,
  itemChange: "",
  
};

export const changesCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_CHANGES_CARD:
      return {
        ...state,
        isOpenChangesCard: action.payload,
      };

    case CLOSE_CHANGES_CARD:
      return {
        ...state,
        isOpenChangesCard: action.payload,
      };

    case PUT_ITEM_CHANGE:
      return {
        ...state,
        itemChange: action.payload,
      };

    case NEW_ITEM_NAME:
      return {
        ...state,
        itemChange: { ...state.itemChange, name: action.payload },
      };
    case NEW_ITEM_DESCRIPTION:
      return {
        ...state,
        itemChange: { ...state.itemChange, description: action.payload },
      };
    case PUT_NEW_CHANGE_CATEGORY:
      return {
        ...state,
        itemChange: { ...state.itemChange, category: action.payload },
      };
    case PUT_HANDLE_CHANGE_IMPORTANCE:
      return {
        ...state,
        itemChange: { ...state.itemChange, importance: action.payload },
      };

    default:
      return state;
  }
};

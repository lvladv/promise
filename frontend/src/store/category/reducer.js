import {
  GET_CATEGORY_LIST,
  PUT_NEW_CATEGORY,
  CATEGORY_CHANGE,
  PUT_ITEM_CHANGE_CATEGORY,
  PUT_NEW_ITEM_CATEGORY,
  CLOSE_CATEGORY_CHANGE,
  CHANGE_ITEM_CATEGORY,
  DELETE_ITEM_CATEGORY,
  PUT_SELECT_CATEGORY_COLOR,
  PUT_NEW_COLOR_CATEGORY,
} from "./action";

const initialState = {
  categoryList: [],
  category: "",
  itemChangeCategory: {},
  openChangeCategory: false,
  selectCategoryColor: "",
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
    case PUT_SELECT_CATEGORY_COLOR:
      return {
        ...state,
        selectCategoryColor: action.payload,
      };

    case PUT_ITEM_CHANGE_CATEGORY:
      return {
        ...state,
        itemChangeCategory: action.payload,
        openChangeCategory: true,
      };

    case CLOSE_CATEGORY_CHANGE:
      return {
        ...state,
        itemChangeCategory: {},
        openChangeCategory: false,
      };

    case PUT_NEW_ITEM_CATEGORY:
      return {
        ...state,
        itemChangeCategory: {
          ...state.itemChangeCategory,
          name: action.payload,
        },
      };
    case PUT_NEW_COLOR_CATEGORY:
      return {
        ...state,
        itemChangeCategory: {
          ...state.itemChangeCategory,
          color: action.payload,
        },
      };

    case DELETE_ITEM_CATEGORY:
      return {
        ...state,
        categoryList: state.categoryList.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case CHANGE_ITEM_CATEGORY:
      return {
        ...state,

        categoryList: state.categoryList.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              name: action.payload.name,
              color: action.payload.color,
            };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

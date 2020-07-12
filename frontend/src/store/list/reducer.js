import {
  GET_LIST,
  PUT_NEW_POINT_LIST,
  NEW_STATUS,
  NEW_CHANGE,
  FILTER_LIST,
  MESSAGE_NEW_CARD,
  CLOSE_MESSAGE,
  PUT_NEW_DESCRIPTION,
  PUT_NEW_NAME,
} from "./action";

const initialState = {
  list: [],
  page: {},
  pageNumber: 1,
  message: "",
  name: "",
  description: "",
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        list: action.payload,
        page: action.page,
      };

    case PUT_NEW_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case PUT_NEW_DESCRIPTION:
      return {
        ...state,
        description: action.payload,
      };

    case MESSAGE_NEW_CARD:
      return {
        ...state,
        message: action.payload,
      };
    case CLOSE_MESSAGE:
      return {
        ...state,
        message: "",
      };

    case FILTER_LIST:
      return {
        ...state,
        list: action.payload,
        page: action.page,
        pageNumber: action.pageNumber,
      };

    case PUT_NEW_POINT_LIST:
      return {
        ...state,
        list: [action.payload, ...state.list],
      };

    case NEW_STATUS:
      const { payload: newItem } = action;
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.id === newItem.id) {
            return {
              ...item,
              status: item.status === "Y" ? "N" : "Y",
            };
          }
          return item;
        }),
      };

    case NEW_CHANGE:
      const { payload: itemChange } = action;
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.id === itemChange.id) {
            return {
              ...item,
              name: itemChange.name,
              description: itemChange.description,
              category: itemChange.category,
              importance: itemChange.importance,
            };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

import {
  OPEN_AUTORISATION,
  OPEN_REGISTRATION,
  OPEN_ACCAUNT_MENU,
  CLOSE_ACCAUNT_MENU,
} from "./action";

const initialState = {
  entrance: true,
  accauntMenu: false,
};

export const changeEntranceReduser = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_AUTORISATION:
      return {
        ...state,
        entrance: action.payload,
      };

    case OPEN_REGISTRATION:
      return {
        ...state,
        entrance: action.payload,
      };

    case OPEN_ACCAUNT_MENU:
      return {
        ...state,
        accauntMenu: action.payload,
      };
    case CLOSE_ACCAUNT_MENU:
      return {
        ...state,
        accauntMenu: action.payload,
      };

    default:
      return state;
  }
};

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

export const changeEntranceReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_ACCAUNT_MENU:
      return {
        ...state,
        accauntMenu: !state.accauntMenu,
      };

    default:
      return state;
  }
};

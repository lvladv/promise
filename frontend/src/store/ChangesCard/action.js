export const OPEN_CHENGES_CARD = "OPEN_CHENGES_CARD";
export const CLOSE_CHENGES_CARD = "CLOSE_CHENGES_CARD";
export const PUT_ITEM_CHENGE = "PUT_ITEM_CHENGE";
export const NEW_ITEM_NAME = "NEW_ITEM_NAME";
export const NEW_ITEM_DESCRIPTION = "NEW_ITEM_DESCRIPTION";

export function openChengesCard() {
  return {
    type: OPEN_CHENGES_CARD,
    payload: true,
  };
}

export function closeChengesCard() {
  return {
    type: CLOSE_CHENGES_CARD,
    payload: false,
  };
}

export function putItemChenges(itemChange) {
  return {
    type: PUT_ITEM_CHENGE,
    payload: itemChange,
  };
}

export function putNewItem(name, value) {
  switch (name) {
    case "name":
      return { type: NEW_ITEM_NAME, payload: value };
      
    case "description":
      return { type: NEW_ITEM_DESCRIPTION, payload: value };
      
      
  default:
    break;
  }
}


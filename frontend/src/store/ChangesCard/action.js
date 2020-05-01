export const OPEN_CHANGES_CARD = "OPEN_ChangES_CARD";
export const CLOSE_CHANGES_CARD = "CLOSE_ChangES_CARD";
export const PUT_ITEM_CHANGE = "PUT_ITEM_ChangE";
export const NEW_ITEM_NAME = "NEW_ITEM_NAME";
export const NEW_ITEM_DESCRIPTION = "NEW_ITEM_DESCRIPTION";

export function openChangesCard() {
  return {
    type: OPEN_CHANGES_CARD,
    payload: true,
  };
}

export function closeChangesCard() {
  return {
    type: CLOSE_CHANGES_CARD,
    payload: false,
  };
}

export function putItemChanges(itemChange) {
  return {
    type: PUT_ITEM_CHANGE,
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

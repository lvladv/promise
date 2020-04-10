export const OPEN_NEW_CARD = "OPEN_NEW_CARD";
export const CLOSE_NEW_CARD = "CLOSE_TOP_CARD";

export function openNewCard() {
    return {
      type: OPEN_NEW_CARD,
      payload: true,
    }
  }

export function closeNewCard() {
    return {
      type: CLOSE_NEW_CARD,
      payload: false,
    }
  }
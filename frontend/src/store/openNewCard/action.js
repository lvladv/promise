export const OPEN_NEW_CARD = "OPEN_NEW_CARD";
export const CLOSE_NEW_CARD = "CLOSE_TOP_CARD";
export const IMPORTANCE_CHANGE = "IMPORTANCE_CHANGE";
export const DEADLINE_CHANGE = "DEADLINE_CHANGE";
export const DEADLINE_TIME_CHANGE = "DEADLINE_TIME_CHANGE";
export const OPEN_NEW_CATEGORY = "OPEN_NEW_CATEGORY";

export function openNewCard() {
  return {
    type: OPEN_NEW_CARD,
    payload: true,
  };
}

export function closeNewCard() {
  return {
    type: CLOSE_NEW_CARD,
    payload: false,
  };
}

export function importanceChange(value) {
  return {
    type: IMPORTANCE_CHANGE,
    payload: value,
  };
}

export function deadlineChange(date) {
  return {
    type: DEADLINE_CHANGE,
    payload: date,
  };
}
export function deadlineTimeChange(time) {
  return {
    type: DEADLINE_TIME_CHANGE,
    payload: time,
  };
}
export function openNewCategory() {
  return {
    type: OPEN_NEW_CATEGORY,
  };
}

export const CLICK_CATEGORY = "CLICK_CATEGORY";
export const CLICK_IMPORTANCE = "CLICK_IMPORTANCE";

export function clickCategory() {
  return {
    type: CLICK_CATEGORY,
  };
}

export function clickImportence() {
  return {
    type: CLICK_IMPORTANCE,
  };
}

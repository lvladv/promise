export const OPEN_AUTORISATION = "OPEN_AUTORISATION";
export const OPEN_REGISTRATION = "OPEN_REGISTRATION";
export const OPEN_ACCAUNT_MENU = "OPEN_ACCAUNT_MENU";
export const CLOSE_ACCAUNT_MENU = "CLOSE_ACCAUNT_MENU";

export function openAuterisation() {
  return {
    type: OPEN_AUTORISATION,
    payload: true,
  };
}

export function openRegistration() {
  return {
    type: OPEN_REGISTRATION,
    payload: false,
  };
}

export function openAccauntMenu() {
  return {
    type: OPEN_ACCAUNT_MENU,
    payload: true,
  };
}

export function closeAccauntMenu() {
  return {
    type: CLOSE_ACCAUNT_MENU,
    payload: false,
  };
}


import { url } from "./../url";
export const REGISTRATION = "REGISTRATION";
export const INPUT_ERROR = "INPUT_ERROR";
export const ERROR = "ERROR";
export const CLOSE_ERROR = "CLOSE_ERROR";
export const OK_REGISTRATION = "OK_REGISTRATION";

export const newUser = (newEmail, newUsername, newPassword) => {
  return async (dispatch) => {
    let formData = new FormData();
    formData.append("username", newUsername);
    formData.append("password", newPassword);
    formData.append("email", newEmail);

    let requestOptions = {
      method: "POST",
      body: formData,
    };

    let response = await fetch(
      `${url}auth/users/`,
      requestOptions
    );
    let autor = await response.json();

    if (response.ok) {
      await dispatch({
        type: OK_REGISTRATION,
      });
    } else if (!response.ok) {
      await dispatch({
        type: ERROR,
        login: autor.username,
        email: autor.email,
        password: autor.password,
      });
      console.log(autor);
    }
  };
};

export function closeErrorRegistration() {
  return {
    type: CLOSE_ERROR,
  };
}

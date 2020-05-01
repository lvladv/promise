import isEmail from "validator/lib/isEmail";

export const REGISTRATION = "REGISTRATION";
export const INPUT_ERROR = "INPUT_ERROR";
export const ERROR_LOGIN = "ERROR_LOGIN";
export const CLOSE_ERROR = "CLOSE_ERROR";

export const newUser = (newEmail, newUsername, newPassword) => {
  return async (dispatch) => {
    console.log(newPassword.length);
    if (
      newEmail !== "" &&
      isEmail(newEmail) &&
      newUsername !== "" &&
      newPassword !== "" &&
      newPassword.length > 8 &&
      (newEmail !== newUsername) !== newPassword
    ) {
      let formData = new FormData();
      formData.append("username", newUsername);
      formData.append("password", newPassword);
      formData.append("email", newEmail);

      let requestOptions = {
        method: "POST",
        body: formData,
      };

      let response = await fetch(
        `http://77.244.65.15:3527/api/v1/data/auth/users/`,
        requestOptions
      );
      let autor = await response.json();
      console.log(autor);
      if ((autor.username = "A user with that username already exists.")) {
        await dispatch({
          type: ERROR_LOGIN,
        });
      }
    } else {
      await dispatch({
        type: INPUT_ERROR,
      });
    }
  };
};

export function closeErrorRegistration() {
  return {
    type: CLOSE_ERROR,
  };
}

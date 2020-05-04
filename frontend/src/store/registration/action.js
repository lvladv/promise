import isEmail from "validator/lib/isEmail";

export const REGISTRATION = "REGISTRATION";
export const INPUT_ERROR = "INPUT_ERROR";
export const ERROR_LOGIN = "ERROR_LOGIN";
export const ERROR_EMAIL = "ERROR_EMAIL";
export const CLOSE_ERROR = "CLOSE_ERROR";
export const OK_REGISTRATION = "OK_REGISTRATION";

export const newUser = (newEmail, newUsername, newPassword) => {
  return async (dispatch) => {
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
      console.log(response.ok);

      if (response.ok) {
        await dispatch({
          type: OK_REGISTRATION,
        });
      }

      if (!response.ok) {
        if ((autor.username = ["A user with that username already exists."])) {
          await dispatch({
            type: ERROR_LOGIN,
          });
        } else if ((autor.email = ["user with this email already exists."])) {
          await dispatch({
            type: ERROR_EMAIL,
          });
        } else {
          await dispatch({
            type: INPUT_ERROR,
          });
        }
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

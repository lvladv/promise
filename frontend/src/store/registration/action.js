export const REGISTRATION = "REGISTRATION";
export const ERROR_VALID_EMAIL = "ERROR_VALID_EMAIL";
export const ERROR_LOGIN = "ERROR_LOGIN";
export const ERROR_LOGIN_CHAR = "ERROR_LOGIN_CHAR";
export const ERROR_PASSWORD = "ERROR_PASSWORD";
export const ERROR_PASSWORD_LOGIN = "ERROR_PASSWORD_LOGIN";
export const ERROR_PASSWORD_EMAIL = "ERROR_PASSWORD_EMAIL";
export const ERROR_PASSWORD_SHORT = "ERROR_PASSWORD_SHORT";

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
      `http://77.244.65.15:3527/api/v1/data/auth/users/`,
      requestOptions
    );
    let autor = await response.json();

    console.log(autor);
    // if ((autor.email = "Enter a valid email address.")) {
    //   await dispatch({
    //     type: ERROR_VALID_EMAIL,
    //   });
    // }
    if ((autor.username = "A user with that username already exists.")) {
      await dispatch({
        type: ERROR_LOGIN,
      });
    }
    // if (
    //   (autor.username =
    //     "Enter a valid username. This value may contain only letters, numbers, and @/./+/-/_ characters.")
    // ) {
    //   await dispatch({
    //     type: ERROR_LOGIN_CHAR,
    //   });
    // }
    // if (autor.password === "The password is too similar to the username.") {
    //   await dispatch({
    //     type: ERROR_PASSWORD_LOGIN,
    //   });
    // }
    // if (
    //   autor.password === "The password is too similar to the email address."
    // ) {
    //   await dispatch({
    //     type: ERROR_PASSWORD_EMAIL,
    //   });
    // }
    // if (
    //   autor.password ===
    //   "This password is too short. It must contain at least 8 characters."
    // ) {
    //   await dispatch({
    //     type: ERROR_PASSWORD_SHORT,
    //   });
    // }

    // if (
    //   autor.password ===
    //     "This password is too short. It must contain at least 8 characters." ||
    //   autor.password === "This password is too common." ||
    //   autor.password === "This password is entirely numeric."
    // ) {
    //   await dispatch({
    //     type: ERROR_PASSWORD,
    //   });
    // }
    await dispatch({
      type: REGISTRATION,
    });
  };
};

// export function closeError(){
//   return{
//     type: CLOSE_ERROR
//   }
// }

export const REGISTRATION = "REGISTRATION";

export const newUser = (newEmail, newUsername, newPassword) => {
  return async dispatch => {
    let formData = new FormData();
    formData.append("username",newUsername );
    formData.append("password", newPassword);
    formData.append("email", newEmail);

    let requestOptions = {
      method: "POST",
      body: formData
    };

    let response = await fetch(
      `http://77.244.65.15:3527/api/v1/data/auth/users/`,
      requestOptions
    );
    let autor = await response.json();
    console.log(autor);

    await dispatch({
      type: REGISTRATION
    });
  };
};

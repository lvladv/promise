export const PUT_NEW_TOKEN = "PUT_NEW_TOKEN";
export const PUT_NEW_TOKEN_FROM_REFRESH = "PUT_NEW_TOKEN_FROM_REFRESH";
export const ERROR_REQUEST = "ERROR_REQUEST";

export const newToken = (username, password) => {
  return async dispatch => {
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    let requestOptions = {
      method: "POST",
      body: formData
    };
    let response = await fetch(
      `http://77.244.65.15:3527/api/v1/data/auth/jwt/create/`,
      requestOptions
    );
    let autor = await response.json();

    if (response.ok) {
      await localStorage.setItem("Authorization", `Bearer ${autor.access}`);
      await localStorage.setItem("remember", "true");
      await localStorage.setItem("tokenData", Date.now());
      await localStorage.setItem("refresh", autor.refresh);

      await dispatch({
        type: PUT_NEW_TOKEN,
        payload: `Bearer ${autor.access}`
      });
    }
  };
};

export const newTokenFromRefresh = () => {
  return async dispatch => {
    const remember = localStorage.getItem("remember") === "true";
    const tokenData = localStorage.getItem("tokenData");

    if (remember) {
      if (Date.now() >= tokenData * 5000) {
        const tokenRefresh = localStorage.getItem("refresh");
        let formData = new FormData();
        formData.append("refresh", tokenRefresh);

        let requestOptions2 = {
          body: formData,
          method: "POST"
        };

        let resp = await fetch(
          `http://77.244.65.15:3527/api/v1/data/auth/jwt/refresh/`,
          requestOptions2
        );
        if (resp.status === 401) {
          await dispatch({
            type: ERROR_REQUEST
          });
        }

        let newToken = await resp.json();
        await localStorage.setItem(
          "Authorization",
          `Bearer ${newToken.access}`
        );

        await dispatch({
          type: PUT_NEW_TOKEN_FROM_REFRESH,
          payload: `Bearer ${newToken.access}`
        });
      }
    }
  };
};

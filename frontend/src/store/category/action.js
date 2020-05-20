export const GET_CATEGORY_LIST = "GET_CATEGORY_LIST";
export const PUT_NEW_CATEGORY = "PUT_NEW_CATEGORY";
export const CATEGORY_CHANGE = "CATEGORY_CHANGE";

export const newCategoryList = () => {
  return async (dispatch) => {
    let requestOptions = {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    };

    let response = await fetch(
      ` http://77.244.65.15:3527/api/v1/data/category/`,
      requestOptions
    );
    let list = await response.json();
    await dispatch({
      type: GET_CATEGORY_LIST,
      payload: list,
    });
  };
};

export const putNewCategory = (name) => {
  return async (dispatch) => {
    await dispatch({
      type: PUT_NEW_CATEGORY,
      payload: {
        name: name,
        color: "#ffffff",
      },
    });
    let formData = new FormData();
    formData.append("name", name);
    formData.append("color", "#ffffff");

    let requestOptions = {
      body: formData,
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
      method: "POST",
    };

    await fetch(
      `http://77.244.65.15:3527/api/v1/data/category/new/`,
      requestOptions
    );
  };
};

export const categoryChange = (value) => {
  return {
    type: CATEGORY_CHANGE,
    payload: value,
  };
};

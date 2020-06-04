import { url } from "./../url";
export const GET_CATEGORY_LIST = "GET_CATEGORY_LIST";
export const PUT_NEW_CATEGORY = "PUT_NEW_CATEGORY";
export const CATEGORY_CHANGE = "CATEGORY_CHANGE";
export const PUT_ITEM_CHANGE_CATEGORY = "PUT_ITEM_CHANGE_CATEGORY";
export const CHANGE_ITEM_CATEGORY = "CHANGE_ITEM_CATEGORY";
export const PUT_NEW_ITEM_CATEGORY = "PUT_NEW_ITEM_CATEGORY";
export const CLOSE_CATEGORY_CHANGE = "CLOSE_CATEGORY_CHANGE";
export const DELETE_ITEM_CATEGORY = "DELETE_ITEM_CATEGORY";

export const newCategoryList = () => {
  return async (dispatch) => {
    let requestOptions = {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    };

    let response = await fetch(
      ` http://${url}/api/v1/data/category/`,
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

    await fetch(`http://${url}/api/v1/data/category/new/`, requestOptions);
  };
};

export function putItemChangesCategory(itemChangeCategory) {
  return {
    type: PUT_ITEM_CHANGE_CATEGORY,
    payload: itemChangeCategory,
  };
}

export function putNewItemCategory(value) {
  return {
    type: PUT_NEW_ITEM_CATEGORY,
    payload: value,
  };
}

export const changeItemCategory = (itemChangeCategory) => {
  return async (dispatch) => {
    await dispatch({
      type: CHANGE_ITEM_CATEGORY,
      payload: itemChangeCategory,
    });

    let formData = new FormData();
    formData.append("name", itemChangeCategory.name);
    formData.append("color", "#ffffff");

    let requestOptions = {
      body: formData,
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
      method: "PATCH",
    };

    await fetch(
      `http://${url}/api/v1/data/category/${itemChangeCategory.id}/`,
      requestOptions
    );
  };
};

export const deleteItemCategory = (itemChangeCategory) => {
  return async (dispatch) => {
    await dispatch({
      type: DELETE_ITEM_CATEGORY,
      payload: itemChangeCategory,
    });

    let requestOptions = {
      // body: formData,
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
      method: "DELETE",
    };

    await fetch(
      `http://${url}/api/v1/data/category/${itemChangeCategory.id}/`,
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
export const closeChangeCategory = () => {
  return {
    type: CLOSE_CATEGORY_CHANGE,
  };
};

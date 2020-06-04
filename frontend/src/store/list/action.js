import { format } from "date-fns";
import { url } from "./../url";
export const GET_LIST = "GET_LIST";
export const PUT_NEW_POINT_LIST = "PUT_NEW_POINT_LIST";
export const NEW_STATUS = "NEW_STATUS";
export const NEW_CHANGE = "NEW_CHANGE";
export const SET_PAGE = "SET_PAGE";
export const FILTER_LIST = "FILTER_LIST";
export const OPEN_PARAMETERS = "OPEN_PARAMETERS";

const requestOptions = {
  method: "GET",
  headers: {
    Authorization: localStorage.getItem("Authorization"),
  },
};

export const newList = () => {
  return async (dispatch) => {
    let response = await fetch(
      `http://${url}/api/v1/data/promise/`,
      requestOptions
    );

    let list = await response.json();
    await dispatch({
      type: GET_LIST,
      payload: list.results,
      page: list,
    });
  };
};

export const setPage = (value) => {
  return async (dispatch) => {
    let response = await fetch(
      `http://${url}/api/v1/data/promise/?page=${value}`,
      requestOptions
    );
    let list = await response.json();
    await dispatch({
      type: SET_PAGE,
      payload: list.results,
      pageNumber: value,
    });
  };
};

export const filterList = (name, value) => {
  return async (dispatch) => {
    let response = await fetch(
      `http://${url}/api/v1/data/promise/?${name}=${value}`,
      requestOptions
    );
    let list = await response.json();
    await dispatch({
      type: FILTER_LIST,
      payload: list.results,
    });
  };
};

export const newPointList = (
  name,
  description,
  importance,
  deadline,
  deadlineTime,
  category
) => {
  return async (dispatch) => {
    await dispatch({
      type: PUT_NEW_POINT_LIST,
      payload: {
        id: Date.now(),
        name: name,
        description: description,
        status: "N",
        importance: importance,
        deadline: deadline + " " + deadlineTime,
        category: category,
      },
    });
    console.log(deadlineTime);
    let formData = new FormData();
    let deadlineData = format(
      new Date(deadline + " " + deadlineTime),
      "yyyy-MM-dd HH:mm"
    );
    formData.append("name", name);
    formData.append("description", description);
    formData.append("status", "N");
    formData.append("importance", importance);
    formData.append("deadline", deadlineData);
    formData.append("category", category);

    let requestOptions = {
      body: formData,
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
      method: "POST",
    };

    await fetch(`http://${url}/api/v1/data/promise/new/`, requestOptions);
  };
};

export const newStatus = (newItem) => {
  return async (dispatch) => {
    await dispatch({
      type: NEW_STATUS,
      payload: newItem,
    });

    let formData = new FormData();
    formData.append("status", "Y");
    let requestOptions = {
      body: formData,
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
      method: "PATCH",
    };

    await fetch(
      `http://${url}/api/v1/data/promise/${newItem.slug}/`,
      requestOptions
    );
  };
};

export const changeItem = (itemChange) => {
  return async (dispatch) => {
    await dispatch({
      type: NEW_CHANGE,
      payload: itemChange,
    });

    let formData = new FormData();
    formData.append("name", itemChange.name);
    formData.append("description", itemChange.description);
    formData.append("category", itemChange.category);
    formData.append("importance", itemChange.importance);

    let requestOptions = {
      body: formData,
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
      method: "PATCH",
    };

    await fetch(
      `http://${url}/api/v1/data/promise/${itemChange.slug}/`,
      requestOptions
    );
  };
};

export function openParameters() {
  return {
    type: OPEN_PARAMETERS,
  };
}

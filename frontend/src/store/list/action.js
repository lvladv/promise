import { format } from "date-fns";
import { url, paramUrl } from "./../url";
export const GET_LIST = "GET_LIST";
export const PUT_NEW_POINT_LIST = "PUT_NEW_POINT_LIST";
export const NEW_STATUS = "NEW_STATUS";
export const NEW_CHANGE = "NEW_CHANGE";
export const FILTER_LIST = "FILTER_LIST";
export const MESSAGE_NEW_CARD = "MESSAGE_NEW_CARD";
export const CLOSE_MESSAGE = "CLOSE_MESSAGE";
export const PUT_NEW_NAME = "PUT_NEW_NAME";
export const PUT_NEW_DESCRIPTION = "PUT_NEW_DESCRIPTION";

export function putNewRecord(name, value) {
  switch (name) {
    case "name":
      return { type: PUT_NEW_NAME, payload: value.slice(0, 32) };

    case "description":
      return { type: PUT_NEW_DESCRIPTION, payload: value };

    default:
      break;
  }
}

export const newList = () => {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("Authorization"),
    },
  };

  return async (dispatch) => {
    let response = await fetch(`${paramUrl}?status=N`, requestOptions);

    let list = await response.json();
    await dispatch({
      type: GET_LIST,
      payload: list.results,
      page: list,
    });
  };
};



export const filterList = (nameParam, valueParam) => {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("Authorization"),
    },
  };

  if (nameParam !== "page") {
    paramUrl.searchParams.set("page", 1);
  }
  paramUrl.searchParams.set(nameParam, valueParam);

  return async (dispatch) => {
    console.log(paramUrl);
    let response = await fetch(paramUrl, requestOptions);
    let list = await response.json();
    await dispatch({
      type: FILTER_LIST,
      payload: list.results,
      page: list,
      pageNumber: valueParam,
    });
    console.log(list);
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
    if (category) {
      formData.append("category", category);
    }

    let requestOptions = {
      body: formData,
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
      method: "POST",
    };

    let response = await fetch(`${url}promise/new/`, requestOptions);

    if (response.ok) {
      await dispatch({
        type: MESSAGE_NEW_CARD,
        payload: "good",
      });
    } else if (!response.ok) {
      await dispatch({
        type: MESSAGE_NEW_CARD,
        payload: "error",
      });
    }
  };
};

export const newStatus = (newItem) => {
  return async (dispatch) => {
    await dispatch({
      type: NEW_STATUS,
      payload: newItem,
    });

    let formData = new FormData();
    formData.append("status", newItem.status === "Y" ? "N" : "Y");
    let requestOptions = {
      body: formData,
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
      method: "PATCH",
    };

    await fetch(`${url}promise/${newItem.slug}/`, requestOptions);
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

    const response = await fetch(
      `${url}promise/${itemChange.slug}/`,
      requestOptions
    );

    if (response.ok) {
      await dispatch({
        type: MESSAGE_NEW_CARD,
        payload: "good",
      });
    } else if (!response.ok) {
      await dispatch({
        type: MESSAGE_NEW_CARD,
        payload: "error",
      });
    }
  };
};

export const closeMessage = () => {
  return {
    type: CLOSE_MESSAGE,
  };
};

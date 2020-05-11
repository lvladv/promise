import { format } from "date-fns";
export const GET_LIST = "GET_LIST";
export const PUT_NEW_POINT_LIST = "PUT_NEW_POINT_LIST";
export const NEW_STATUS = "NEW_STATUS";
export const NEW_CHANGE = "NEW_CHANGE";
export const newList = () => {
  return async (dispatch) => {
    let requestOptions = {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    };

    let response = await fetch(
      `http://77.244.65.15:3527/api/v1/data/promise/`,
      requestOptions
    );
    let list = await response.json();
    await dispatch({
      type: GET_LIST,
      payload: list.results,
    });
  };
};

export const newPointList = (
  name,
  description,
  importance,
  deadline,
  deadlineTime
) => {
  return async (dispatch) => {
    await dispatch({
      type: PUT_NEW_POINT_LIST,
      payload: {
        id: Date.now(),
        name: name,
        description: description,
        // deadline_row: "3 min",
        status: "N",
        importance: importance,
        deadline: deadline + " " + deadlineTime,
      },
    });
    let formData = new FormData();
    let deadlineData = format(
      new Date(deadline + " " + deadlineTime),
      "yyyy-MM-dd hh:mm"
    );
    console.log(deadlineData);
    formData.append("name", name);
    formData.append("description", description);
    // formData.append("deadline_row", "3 min");
    formData.append("status", "N");
    formData.append("importance", importance);
    formData.append("deadline", deadlineData);

    let requestOptions = {
      body: formData,
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
      method: "POST",
    };

    await fetch(
      `http://77.244.65.15:3527/api/v1/data/promise/new/`,
      requestOptions
    );
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
      `http://77.244.65.15:3527/api/v1/data/promise/${newItem.slug}/`,
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
    let requestOptions = {
      body: formData,
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
      method: "PATCH",
    };

    await fetch(
      `http://77.244.65.15:3527/api/v1/data/promise/${itemChange.slug}/`,
      requestOptions
    );
  };
};

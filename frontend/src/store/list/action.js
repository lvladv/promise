export const GET_LIST = "GET_LIST";
export const PUT_NEW_POINT_LIST = "PUT_NEW_POINT_LIST";
export const NEW_STATUS = "NEW_STATUS";

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

export const newPointList = (name, description) => {
  return async (dispatch) => {
    await dispatch({
      type: PUT_NEW_POINT_LIST,
      payload: {
        id: Date.now(),
        name: name,
        description: description,
        deadline_row: "3 min",
        status: "N",
      },
    });
    let formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("deadline_row", "3 min");
    formData.append("status", "N");

    let requestOptions = {
      body: formData,
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
      method: "POST",
    };

    let response = await fetch(
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

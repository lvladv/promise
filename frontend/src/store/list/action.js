export const GET_LIST = "GET_LIST";
export const PUT_NEW_POINT_LIST = "PUT_NEW_POINT_LIST";

export const newList = () => {
  return async dispatch => {
    let requestOptions = {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("Authorization")
      }
    };

    let response = await fetch(
      `http://77.244.65.15:3527/api/v1/data/promise/`,
      requestOptions
    );
    let list = await response.json();
    await dispatch({
      type: GET_LIST,
      payload: list.results
    });
  };
};

export const newPointList = description => {
  return async dispatch => {
    await dispatch({
      type: PUT_NEW_POINT_LIST,
      payload: {
        id: Date.now(),
        description: description
      }
    });
    let formData = new FormData();

    formData.append("name", "123");
    formData.append("description", description);

    let requestOptions = {
      body: formData,
      headers: {
        Authorization: localStorage.getItem("Authorization")
      },
      method: "POST"
    };

    let response = await fetch(
      `http://77.244.65.15:3527/api/v1/data/promise/new/`,
      requestOptions
    );

    console.log(response.json());
  };
};


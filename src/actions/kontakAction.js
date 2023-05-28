import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK";
export const DELETE_KONTAK = "DELETE_KONTAK";
export const DETAIL_KONTAK = "DETAIL_KONTAK";
export const UPDATE_KONTAK = "UPDATE_KONTAK";

export const getListKontak = () => {
  console.log("2. Masuk ke kontak action");
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_LIST_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //GET API
    axios({
      method: "GET",
      url: "http://localhost:3001/contacts",
      timeout: 12000,
    })
      .then((response) => {
        // BERHASIL GET API
        dispatch({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //Gagal GET API
        dispatch({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addKontak = (data) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: ADD_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //ADD Data
    axios({
      method: "POST",
      url: "http://localhost:3001/contacts",
      timeout: 12000,
      data: data,
    })
      .then((response) => {
        // BERHASIL ADD Data
        dispatch({
          type: ADD_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //Gagal add Data
        dispatch({
          type: ADD_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteKontak = (id) => {
  console.log("2. Masuk ke kontak action");
  return (dispatch) => {
    //loading
    dispatch({
      type: DELETE_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //GET API
    axios({
      method: "DELETE",
      url: `http://localhost:3001/contacts/${id}`,
      timeout: 12000,
    })
      .then((response) => {
        // BERHASIL DELETE DATA
        console.log("3. Berhasil delete data! : ", response);
        dispatch({
          type: DELETE_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //Gagal DELETE DATA
        console.log("3. gagal delete data! : ", error);
        dispatch({
          type: DELETE_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const detailKontak = (data) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_KONTAK,
      payload: {
        data: data,
      },
    });
  };
};

export const updateKontak = (data) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: UPDATE_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //ADD Data
    axios({
      method: "PUT",
      url: `http://localhost:3001/contacts/${data.id}`,
      timeout: 12000,
      data: data,
    })
      .then((response) => {
        // BERHASIL ADD Data
        dispatch({
          type: UPDATE_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //Gagal add Data
        dispatch({
          type: UPDATE_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
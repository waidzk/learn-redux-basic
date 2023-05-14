import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";

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
        console.log("3. Berhasil get api! : ", response);
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
        console.log("3. gagal get api! : ", error);
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

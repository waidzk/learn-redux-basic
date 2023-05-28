import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteKontak,
  detailKontak,
  getListKontak,
} from "../../actions/kontakAction";

function ListKontak() {
  const {
    getListKontakResult,
    getListKontakLoading,
    getListKontakError,
    deleteKontakResult,
  } = useSelector((state) => state.KontakReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // Panggil action getListKontak
    dispatch(getListKontak());
  }, [dispatch]);

  useEffect(() => {
    if (deleteKontakResult) {
      console.log("5. Masuk ComponentDidUpdate");
      dispatch(getListKontak());
    }
  }, [deleteKontakResult, dispatch]);

  return (
    <div>
      <h4>List Kontak</h4>
      {getListKontakResult ? (
        getListKontakResult.map((contact) => (
          <p key={contact.id}>
            {contact.name} | {contact.number} |
            <button onClick={() => dispatch(deleteKontak(contact.id))}>
              Hapus
            </button>
            <button onClick={() => dispatch(detailKontak(contact))}>
              Edit
            </button>
          </p>
        ))
      ) : getListKontakLoading ? (
        <p>Loading ...</p>
      ) : (
        <p>{getListKontakError ? getListKontakError : "Data Kosong"}</p>
      )}
    </div>
  );
}

export default ListKontak;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListKontak } from "../../actions/kontakAction";

function ListKontak() {
  const { getListKontakResult, getListKontakLoading, getListKontakError } =
    useSelector((state) => state.KontakReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    // Panggil action getListKontak
    dispatch(getListKontak());
  }, [dispatch]);

  return (
    <div>
      <h4>List Kontak</h4>
      {getListKontakResult ? (
        getListKontakResult.map((contact) => (
            <p key={contact.id}>{contact.name} | {contact.number}</p>
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

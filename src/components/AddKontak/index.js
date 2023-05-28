import React, { useEffect, useState } from "react";
import {
  addKontak,
  getListKontak,
  updateKontak,
} from "../../actions/kontakAction";
import { useDispatch, useSelector } from "react-redux";

function AddKontak() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const { addKontakResult, detailKontakResult, updateKontakResult } =
    useSelector((state) => state.KontakReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      //update kontak
      dispatch(updateKontak({ name: name, number: number, id: id }));
    } else {
      // add kontak
      dispatch(addKontak({ name: name, number: number }));
    }
  };

  useEffect(() => {
    if (addKontakResult) {
      dispatch(getListKontak());
      setName("");
      setNumber("");
    }
  }, [addKontakResult, dispatch]);

  useEffect(() => {
    if (detailKontakResult) {
      setName(detailKontakResult.name);
      setNumber(detailKontakResult.number);
      setId(detailKontakResult.id);
    }
  }, [detailKontakResult, dispatch]);

  useEffect(() => {
    if (updateKontakResult) {
      dispatch(getListKontak());
      setName("");
      setNumber("");
      setId("");
    }
  }, [updateKontakResult, dispatch]);

  return (
    <div>
      <h4>{id ? "Update Kontak" : "Add Kontak"}</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="name"
          placeholder="enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="number"
          placeholder="enter no hp"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default AddKontak;

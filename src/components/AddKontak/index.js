import React, { useEffect, useState } from "react";
import { addKontak, getListKontak } from "../../actions/kontakAction";
import { useDispatch, useSelector } from "react-redux";

function AddKontak() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const { addKontakResult } = useSelector((state) => state.KontakReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("1. Masuk handle submit");
    dispatch(addKontak({ name: name, number: number }));
  };

  useEffect(() => {
    if (addKontakResult) {
      console.log("5. Masuk ComponentDidUpdate");
      dispatch(getListKontak());
      setName("");
      setNumber("");
    }
  }, [addKontakResult, dispatch]);

  return (
    <div>
      <h4>AddKontak</h4>
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

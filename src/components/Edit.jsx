import React, { useEffect, useState } from "react";
import styles from "../App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { edit_fav } from "../redux/reducer";
import { useParams } from "react-router-dom";

const Edit = () => {
  const [editar, setEditar] = useState({
    name: "",
    species: "",
    status: "",
    gender: "",
    origin: "",
  });
  const { data } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    if (params.id) {
     
      setEditar(data.find((item) => item.id === params.id));
    }
  }, []);

  function handleChange(event) {
    setEditar({
      ...editar,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(edit_fav({
      ...editar
    }));
  }
 
  return (
    <div className={styles.edit}>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={editar.name}
          onChange={handleChange}
        />

        <label>Species</label>
        <input
          type="text"
          name="species"
          value={editar.species}
          onChange={handleChange}
        />

        <label>Status</label>
        <input
          type="text"
          name="status"
          value={editar.status}
          onChange={handleChange}
        />

        <label>Origin</label>
        <input
          type="text"
          name="origin"
          value={editar.origin}
          onChange={handleChange}
        />

        <label>Gender</label>
        <input
          type="text"
          name="gender"
          value={editar.gender}
          onChange={handleChange}
        />
        <button>Edit</button>
      </form>
    </div>
  );
};

export default Edit;
/**
 * 
 *  <h2>{character.name}</h2>
      <h2>{character.species}</h2>
      <h2>{character.status}</h2>
      <h2>{character.gender}</h2>
      <h2>{character.origin && character.origin.name}</h2>
 */

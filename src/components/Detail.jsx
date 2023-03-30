import React, { useEffect, useState } from "react";
import axios from "axios";
import  { NavLink, useParams } from "react-router-dom";
import styles from "../App.module.css";

const Detail = () => {
  const [character, setCharacter] = useState({});
 
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con  ese id");
        }
      });
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <NavLink to='/home'>
        <button >Regresar Home</button>
      </NavLink>
      
      <h2>{character.name}</h2>
      <h2>{character.species}</h2>
      <h2>{character.status}</h2>
      <h2>{character.gender}</h2>
      <h2>{character.origin && character.origin.name}</h2>
      <img className={styles.image} src={character.image} alt="imagen" />
    </div>
  );
};

export default Detail;

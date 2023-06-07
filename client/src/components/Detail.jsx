import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import styles from "../App.module.css";

const Detail = () => {
  const [character, setCharacter] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
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
    <div
      className={styles.detail}
      style={{
        backgroundImage: `url(${character.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        width:'100%',
        margin:0,
        marginTop:'5rem',
        opacity:0.9
        
      }}
    >
      <NavLink to="/home">
        <button>Regresar Home</button>
      </NavLink>
      <NavLink to={`/edit/${id}`}>
        <button>Editar</button>
      </NavLink>
      <h2>{character.name}</h2>
      <h2>{character.species}</h2>
      <h2>{character.status}</h2>
      <h2>{character.gender}</h2>
      <h2>{character.origin && character.origin.name}</h2>
    </div>
  );
};

export default Detail;

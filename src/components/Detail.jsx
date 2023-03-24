 import axios from 'axios'
 import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import styles from '../App.module.css'

const Detail = () => {
  const [character, setCharacter] = useState({})
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
            return setCharacter({})
     }, [id])
     

  return (
  <div>
    <h2>{character.name}</h2>
         <h2>{character.species}</h2>
         <h2>{character.gender}</h2>
         <img className={styles.image} src={character.image} alt="imagen"/> 
  </div>
  )
};

export default Detail;

import React from "react";
import styles from "../App.module.css";
import { useSelector } from "react-redux";
import Characters from "./Characters";
import CardCharacter from "./CardCharacter";

export default function Cards({ onClose }) {
  const state = useSelector((state) => state.data);
  
  return (
    <div >
   
     <div  className={styles.cards}>
      {state &&
        state.map((data) => (
          <div key={data.id}>
            <CardCharacter
              id={data.id}
              name={data.name}
              species={data.species}
              gender={data.gender}
              image={data.image}
              onClose={onClose}
            />
          </div>
        ))
        .reverse()}
    </div>
    <div  className={styles.cards}>
      <Characters/>
    </div>
    </div>
   
  );
}

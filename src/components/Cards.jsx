import React from "react";
import Card from "./Card";
import styles from "../App.module.css";
import { useSelector } from "react-redux";
import Character from "./Character";

export default function Cards({ onClose }) {
  const state = useSelector((state) => state.reducer.data);
  
  return (
    <>
   
     <div className={styles.cards}>
      {state &&
        state.map((data) => (
          <div key={data.id}>
            <Card
              id={data.id}
              name={data.name}
              species={data.species}
              gender={data.gender}
              image={data.image}
              onClose={onClose}
            />
          </div>
        ))}
    </div>
    <div className={styles.cards}>
      <Character/>
    </div>
    </>
   
  );
}

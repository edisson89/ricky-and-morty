import React from 'react';
import Card from './Card'
import styles from "../App.module.css";

export default function Cards({ characters, onClose }) {
 
 
  return (
    <div className={styles.cards}>
      {characters &&
       characters.map(({ name, species, gender, image, id }) => (
       
        <Card
          id={id}
          key={id}
          name={name}
          species={species}
          gender={gender}
          image={image}
          onClose={onClose}
        />
      ))}
    </div>
  )
}
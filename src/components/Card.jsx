import React from "react";
import  { NavLink } from "react-router-dom";
import styles from '../App.module.css'

export default function Card (props) {
   const {id,name, species,gender,image,onClose} = props
   return (
      <div className={styles.card}>
          <button id="cardButton" onClick={() => onClose (id)}>X</button>
         <NavLink to={`/detail/${id}`}>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img className={styles.image} src={image} alt="imagen"/> 
         </NavLink>
        
      </div>
   )
}
  
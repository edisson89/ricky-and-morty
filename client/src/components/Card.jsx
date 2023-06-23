import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../App.module.css";

import { AiTwotoneHeart } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../redux/action";

export default function Card(props) {
  const { id, name, species, gender, image, onClose } = props;
  const [fav, setFav] = useState(false);
 const dispatch = useDispatch()
 const favorites = useSelector((state) => state.myFavorites)


  function handleFav() {
    if (fav) {
      setFav(true);
      dispatch(removeFav(id));
    } else {
      setFav(false);
     dispatch(addFav(props)) ;
    }
  }
  function superClose(id) {
    onClose(id)
    dispatch(removeFav(id))
  }
  useEffect(() => {
  favorites &&
  favorites.forEach(element => {
      if(element.id === props.id){
         setFav(true)
      }
    });
  }, [favorites])
  
  return (
    <div className={styles.card}>
      {fav ? (
        <button onClick={handleFav}>
          <IconContext.Provider
            value={{ color: "red",  }}
          >
            <AiTwotoneHeart />
          </IconContext.Provider>
        </button>
      ) : (
        <button onClick={handleFav}>
          <IconContext.Provider
            value={{ color: "gray", className: "global-class-name" }}
          >
            <AiTwotoneHeart />
          </IconContext.Provider>
        </button>
      )}
      <button name="button" onClick={()=>superClose(id)}>
        X
      </button>
      <NavLink to={`/detail/${id}`}>
        <h2>{name}</h2>
        <h2>{id}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <img className={styles.image} src={image} alt="imagen" />
      </NavLink>
    </div>
  );
}

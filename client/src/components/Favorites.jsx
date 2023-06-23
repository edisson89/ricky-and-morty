import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../App.module.css";
import { filter, order, removeFav, reset } from "../redux/action";
import Card from "./Card";



const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavoritesOrigin);
 
  const dispatch = useDispatch();

  function onClose(id) {
       dispatch(removeFav(id));
  }
  function handleOrder(e) {
    e.preventDefault();
    const { value } = e.target;
    dispatch(order(value));
  }
  function handleFilter(e) {
    e.preventDefault();
    const { value } = e.target;
    dispatch(filter(value));
  }
  function resetBtn() {
    dispatch(reset());
  }
  useEffect(() => {
   onClose()
  }, [myFavorites])
  
  return (
    <div>
      <h1>Favoritos</h1>
      <select onChange={handleOrder} name="order" defaultValue={"Default"}>
        <option value="Default" disabled>
          Select Order
        </option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>

      <select onChange={handleFilter} name="filter" defaultValue={"Default"}>
        <option value="Default" disabled>
          Select Filter
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unKnown">unKnown</option>
      </select>

      <button onClick={resetBtn}>Reset</button>

      <div className={styles.cards}>
        {myFavorites &&
         myFavorites.map((data) => {
         const {id} = data
          return (
            <Card
              key={data.id}
              id={id}
              name={data.name}
              species={data.species}
              gender={data.gender}
              image={data.image}
              onClose={()=>(id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;

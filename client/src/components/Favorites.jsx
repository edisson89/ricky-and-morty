import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../App.module.css";
import { filter, order, removeFav, reset } from "../redux/action";
import CardCharacter from "./CardCharacter";


const Favorites = () => {
  const { myFavorites} = useSelector((state) => state);
 
  const dispatch = useDispatch();
  function onCloseFav(id) {
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
            <CardCharacter
              key={data.id}
              id={data.id}
              name={data.name}
              species={data.species}
              gender={data.gender}
              image={data.image}
              onClose={()=>onCloseFav(id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;

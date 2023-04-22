import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { remove_character, } from "../redux/reducer";
import styles from  '../App.module.css'
import { NavLink } from "react-router-dom";

const Character = () => {
  const [results]= useSelector((state) => state.reducer.characters);
           

  const dispatch = useDispatch();

  function onClose({id}) {
    dispatch(remove_character({ id }));
  }
  return (
    <>
      {results &&
        results.map((data) =>(
         
          <div  key={data.id}>
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
    </>
  );
};

export default Character; 

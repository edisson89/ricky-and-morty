import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CardCharacter from "./CardCharacter";
import { removeHome } from "../redux/action";

const Character = () => {
  const dispatch = useDispatch();
  const [results] = useSelector((state) => state.home);
  
  function onClose(id) {
    dispatch(removeHome(results.id));
  }
  

  return (
    <>
      {results &&
        results.map(({id,name,species,gender,image}) => (
         
            <div key={id}>
               
              <CardCharacter
                id={id}
                name={name}
                species={species}
                gender={gender}
                image={image}
                onClose={()=>onClose(id)}
              />
            </div>
          ))
          .reverse()}
    </>
  );
};

export default Character;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeHome } from "../redux/action";
import Card from "./Card"

const Character = () => {
  const dispatch = useDispatch();
  const [results] = useSelector((state) => state.home);

  function onClose(id) {
    dispatch(removeHome(id));
  }

  return (
    <>
      {results &&
        results
          .map(({ id, name, species, gender, image }) => (
            <Card
              key={id}
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              onClose={onClose}
            />
          ))
          .reverse()}
    </>
  );
};

export default Character;

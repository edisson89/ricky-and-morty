import axios from "axios";
import { useState } from "react";
import styles from "./App.module.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
//import axios from "axios";
//import { Routes } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(
      ({ data }) => {
        if (data.name) {
          let existe = characters.find((ch) => ch.id === data.id);
          if (existe) {
            alert("Ya hay personajes con ese ID");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        }else{
          window.alert('No hay personajes con  ese id')
        }
      }
    );
  }

  console.log(characters);

  const onClose = (id) => {
    setCharacters((oldChars) => {
      return oldChars.filter((ch) => ch.id !== id);
    });
  };

  return (
    <div className={styles.App}>
      <Nav onSearch={onSearch} />

      {/* <Route path="/" element={Home}></Route>
        <Route path="/" element={}></Route>
        <Route path="/" element={Home}></Route> */}

      <Cards onClose={onClose} characters={characters} />

      <hr />
    </div>
  );
}

export default App;

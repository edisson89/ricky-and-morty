import axios from "axios";
import  { useState } from "react";
import styles from "./App.module.css";
import Cards from "./components/Cards.jsx";

import { Routes, Route, useLocation } from "react-router-dom";

import Nav from "./components/Nav";
import Login from "./components/Login";
import Detail from "./components/Detail";
import About from "./components/About";
import Loading from "./components/Loading";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  function onSearch(id) {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          let existe = characters.find((ch) => ch.id === data.id);
          if (existe) {
            alert("Ya hay personajes con ese ID");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("No hay personajes con  ese id");
        }
      }
    )};
    
    
      const onClose = (id) => {
    setCharacters((oldChars) => {
      return oldChars.filter((ch) => ch.id !== id);
    });
  };

  return (
    <div className={styles.App}>
      {/* {location.pathname === "/" ? null : <Nav onSearch={onSearch} />} */}
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        ></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/loading" element={<Loading />}></Route>
      </Routes>

      <hr />
    </div>
  );
}

export default App;

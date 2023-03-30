import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./App.module.css";
import Cards from "./components/Cards.jsx";

import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import Nav from "./components/Nav";
import Login from "./components/Login";
import Detail from "./components/Detail";
import About from "./components/About";
import Loading from "./components/Loading";

function App() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const PASSWORD = "Testing123*";
  const EMAIL = "ejemplo12@gmail.com";

  const location = useLocation();

  function login(input) {
    
    if (input.password === PASSWORD && input.email === EMAIL) {
      setAccess(true);
      navigate("/home");
      return alert("Ingreso Correcto");
    }
    return alert('Corrige tus datos') 
  }

  function logout() {
    setAccess(false);
    navigate("/");
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function onSearch(id) {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
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
      });
  }

  function onClose(id) {
    setCharacters((oldChars) => {
      return oldChars.filter((ch) => ch.id !== id);
    });
  }

  return (
    <div className={styles.App}>
      {location.pathname === "/" ? null : (
        <Nav onSearch={onSearch} logout={logout} />
      )}

      <Routes>
        <Route path="/" element={<Login login={login} />}></Route>
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/loading" element={<Loading />}></Route>
      </Routes>

      <hr />
    </div>
  );
}

export default App;

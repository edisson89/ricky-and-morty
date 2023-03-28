import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Cards from "./components/Cards.jsx";

import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import Nav from "./components/Nav";
import Login from "./components/Login";
import Detail from "./components/Detail";
import About from "./components/About";
import Loading from "./components/Loading";

function App() {
  const [characters, setCharacters] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const [access, setAccess] = useState(false);
  const username = "ejemplo@gmail.com";
  const password = "1password";

  function login(input) {
    if (input.password === password && input.username === username) {
      setAccess(true);
      navigate("/home");
    }
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

  const onClose = (id) => {
    setCharacters((oldChars) => {
      return oldChars.filter((ch) => ch.id !== id);
    });
  };

  return (
    <div className={styles.App}>
      {location.pathname === "/" ? null : <Nav onSearch={onSearch} />}
      <Nav onSearch={onSearch} />

      <Routes>
        <Route path="/" element={<Login login={login} />}></Route>

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

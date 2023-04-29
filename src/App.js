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
import { useDispatch } from "react-redux";
import { add_characters, add_fav,remove_fav } from "./redux/reducer";
import Edit from "./components/Edit";
import Character from "./components/Character";
import Favorites from "./components/Favorites";

function App() {
  const navigate = useNavigate();

  const [access, setAccess] = useState(false);
  const PASSWORD = "Testing123*";
  const EMAIL = "ejemplo123@gmail.com";

  const location = useLocation();

  const dispatch = useDispatch();
  //const selector =  useSelector((state)=> state.reducer.data.data)

  function login(input) {
    if (input.password === PASSWORD && input.email === EMAIL) {
      setAccess(true);
      navigate("/home");
      return alert("Ingreso Correcto");
    }
    return alert("Corrige tus datos");
  }

  function logout() {
    setAccess(false);
    navigate("/");
  }

  useEffect(() => {
    !access && navigate("/home");
  }, [access]);

  async function onSearch(id) {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      let { data } = await response;

      dispatch(add_fav(data));
    } catch (error) {}
  }

  function onClose(id) {
    dispatch(remove_fav({ id }));
  }
 


  async function character(id) {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/`
      );
      let { data } = await response;

      dispatch(add_characters(data.results));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect((id) => {
    character(id);
  }, []);

  return (
    <div className={styles.App}>
      {location.pathname === "/" ? <Login login={login} /> : (
        <Nav onSearch={onSearch} logout={logout} />
      )}

      <Routes>
        {/* <Route path="/" element={<Login login={login} />}></Route> */}
        <Route path="/home" element={<Cards onClose={onClose} />}></Route>
        <Route path="/character" element={<Character  />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/loading" element={<Loading />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>

      <hr />
    </div>
  );
}

export default App;

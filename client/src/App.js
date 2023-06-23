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
import Edit from "./components/Edit";
import Characters from "./components/Characters";
import Favorites from "./components/Favorites";
import { addData, addHome, removeData } from "./redux/action";

function App() {
  const navigate = useNavigate();

  const [access, setAccess] = useState(true);
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
    !access && navigate("/");
  }, [access]);

  //Add characters to data
  async function onSearch(id) {
    try {
      const response = await axios.get(
        `http://localhost:3001/rickandmorty/onsearch/${id}`
      );
      let { data } = await response;
           dispatch(addData(data));
    } catch (error) {
      console.log(error);
    }
  }

  function onClose(id) {
    dispatch(removeData(id ));
  }

  //Estado inicial home
  async function character() {
    try {
      const response = await axios.get(
        'http://localhost:3001/rickandmorty/data'
      );
      let { data } = response;  
       
        dispatch(addHome(data.results));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    character();
  }, []);

  return (
    <div className={styles.App}>
      {location.pathname !== "/" ? (
        <Nav onSearch={onSearch} logout={logout} />
      ) : (
        <Login login={login} />
      )}

      <Routes>
        <Route path="/home" element={<Cards onClose={onClose} />}></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
        <Route path="/loading" element={<Loading />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>

      <hr />
    </div>
  );
}

export default App;

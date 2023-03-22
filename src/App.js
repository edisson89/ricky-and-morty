import { useState } from "react";
import styles from "./App.module.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);

 async function onSearch (id){
  try{
     const data = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      
        
        let existe = characters.filter((ch)=> ch.id === id)
        console.log(existe)
        if(existe){
          alert('Ya Existe')
        }else{
          setCharacters((oldChars) => [...oldChars, data]);
        }
        
      
  }catch (error) {
        // handle error
        console.log(error);
      };
    }

  const onClose = (id) => {
    setCharacters((oldChars) => {
      return oldChars.filter((item) => item.id !== id);
    });
  };
  return (
    
    <div className={styles.App}>
      <Routes>
        {/* <Route path="/" element={Home}></Route>
        <Route path="/" element={}></Route>
        <Route path="/" element={Home}></Route> */}

          <Nav onSearch={onSearch} />
         <Cards onClose={onClose} characters={characters} />

      <hr />
      </Routes>
    
    
    </div>
  );
}

export default App;

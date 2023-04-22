import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  function handleChange(event) {
    event.preventDefault();
    setId(event.target.value);
  }

  function getRandom() {
   let max = 856;
    return Math.floor(Math.random(0,max) * max );
  }
  return (

   <div>
      <input onChange={handleChange} name="search" type="search" placeholder="Ingrese su id #"  value={id} />
      <NavLink to="/home">
        <button onClick={() => onSearch(id)}>Agregar</button>
      </NavLink>
       <NavLink to="/home">
        
        <button onClick={() => onSearch(getRandom())}>Random</button>
      </NavLink>
     
    </div>
 
    
  )          
}

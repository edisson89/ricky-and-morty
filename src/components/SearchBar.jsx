import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('')
   
   function handleChange(event) {
      event.preventDefault()
      setId(event.target.value)
     // console.log(event.target.value)
   }
    
   function getRandom(max) {
     max = 856 
      return Math.floor(Math.random() * max);
    }
   return (
      <div >
         <input onChange={handleChange} name='search' type='search' value={id} />
     <NavLink to='/home'>

     <button onClick={()=> onSearch(id)}>Agregar</button>
     </NavLink>
     <NavLink to='/home'>
      <button onClick={()=> onSearch(getRandom())}>Ramdom</button>
     </NavLink>
      </div>
   );
}

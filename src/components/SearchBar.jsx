import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('')
   
   function handleChange(event) {
      event.preventDefault()
      setId(event.target.value)
     // console.log(event.target.value)
   }
   return (
      <div >
         <input onChange={handleChange} name='search' type='search' value={id}/>
      <button onClick={()=> onSearch(id)}>Agregar</button>
      </div>
   );
}

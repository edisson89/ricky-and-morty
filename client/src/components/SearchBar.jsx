import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../App.module.css";

export default function SearchBar({ onSearch,screenWidth,isOpen, onClose, children }) {
  const [id, setId] = useState("");
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobileMenu(window.innerWidth < screenWidth);
    };
    handleResize(); // Verificar el tamaño de la pantalla inicialmente

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  
  function handleChange(event) {
    event.preventDefault();
    setId(event.target.value);
  }

  function getRandom() {
    let max = 856;
    return Math.floor(Math.random(0, max) * max);
  }
  return (
    <>
      {isMobileMenu ? (
        !isModalOpen ?
         <div styles={{backgroundColor:'red'}}>
         <button onClick={openModal}>Menu</button>
        
       </div> :  
       <div isOpen={isModalOpen} onClose={closeModal}>
          <div className={styles.searchInput}>
          <form className={styles.input}>
            <input
              onChange={handleChange}
              name="search"
              type="search"
              placeholder="Ingrese su id #"
              value={id}
            />

            <NavLink to="/home">
              <button onClick={() => onSearch(id)} type="submit">
                Agregar
              </button>
            </NavLink>
          </form>
          <div className={styles.ramdom}>
            <NavLink to="/home">
              <button onClick={() => onSearch(getRandom())}>Random</button>
            </NavLink>
          </div>
        </div>
           <button onClick={closeModal}>Cerrar</button>
         </div>
      ) : (
        <div className={styles.searchInput}>
          <form className={styles.input}>
            <input
              onChange={handleChange}
              name="search"
              type="search"
              placeholder="Ingrese su id #"
              value={id}
            />

            <NavLink to="/home">
              <button onClick={() => onSearch(id)} type="submit">
                Agregar
              </button>
            </NavLink>
          </form>
          <div className={styles.ramdom}>
            <NavLink to="/home">
              <button onClick={() => onSearch(getRandom())}>Random</button>
            </NavLink>
          </div>
          <button onClick={closeModal}>Cerrar</button>
        </div>
      )}
    </>
  );
}

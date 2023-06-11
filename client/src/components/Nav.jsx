import React from "react";
import SearchBar from "./SearchBar";
import styles from "../App.module.css";
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch, logout }) => {
  const screenWidthForMobileMenu = 768;
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLinks}>
        <NavLink className={styles.home} to="/home">
          <button>Home</button>
        </NavLink>

        <NavLink className={styles.home} to="/about">
          <button>About</button>
        </NavLink>
        <NavLink className={styles.home} to="/favorites">
          <button>Favorites</button>
        </NavLink>
      </div>

      <div className={styles.searchBar}>
        <SearchBar onSearch={onSearch} screenWidth={screenWidthForMobileMenu} logout={logout}/>
        
      </div>
    </div>
  );
};

export default Nav;

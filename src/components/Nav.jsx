import React from "react";
import SearchBar from "./SearchBar";
import styles from "../App.module.css";
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch, logout }) => {
  return (
    <div className={styles.navbar}>
      <NavLink className={styles.home} to="/home">
        <button>Home</button>
      </NavLink>

      <NavLink className={styles.home} to="/about">
        <button>About</button>
      </NavLink>
      <NavLink className={styles.home} to="/favorites">
        <button>Favorites</button>
      </NavLink>
      <div className={styles.searchBar}>
        <SearchBar onSearch={onSearch} />
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Nav;

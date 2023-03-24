import React from 'react'
import SearchBar from './SearchBar'
import styles from '../App.module.css'
import { NavLink} from 'react-router-dom'


const Nav = ({onSearch}) => {
  return (
    <div className={styles.navbar}>
      
      <NavLink className={styles.home} to='/home'>
      <button >Home</button>
      </NavLink>

      <NavLink className={styles.home} to='/about'>
      <button >About</button>
      </NavLink>
        <div className={styles.searchBar}>
          <SearchBar onSearch={onSearch}/>
        </div>
        
    </div>
  )
}

export default Nav
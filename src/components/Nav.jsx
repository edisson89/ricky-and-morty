import React from 'react'
import SearchBar from './SearchBar'
import styles from '../App.module.css'
import { Link } from 'react-router-dom'


const Nav = ({onSearch}) => {
  return (
    <div className={styles.navbar}>
      
      <Link to='home'>
      <button>Home</button></Link>

      <Link to='about'>
      <button >About</button>
      </Link>
        <div className={styles.searchBar}>
          <SearchBar onSearch={onSearch}/>
        </div>
        
    </div>
  )
}

export default Nav
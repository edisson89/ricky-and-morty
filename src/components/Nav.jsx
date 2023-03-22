import React from 'react'
import SearchBar from './SearchBar'
import styles from '../App.module.css'

const Nav = ({onSearch}) => {
  return (
    <div className={styles.navbar}>
      
        <div className={styles.searchBar}>
          <SearchBar onSearch={onSearch}/>
        </div>
        
    </div>
  )
}

export default Nav
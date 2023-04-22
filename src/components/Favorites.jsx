import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import styles from '../App.module.css'

const Favorites = ({onClose}) => {
   const {myFavorites} = useSelector(state => state.reducer)
  return (
    <div>
        <h1>Favoritos</h1>
        <div className={styles.cards}>
            {myFavorites.map(data =>(
           <Card 
           id={data.id}
           name={data.name}
           species={data.species}
           gender={data.gender}
           image={data.image}
           onClose={onClose}
           />
        ))}
        </div>
        
    </div>
  )
}

export default Favorites
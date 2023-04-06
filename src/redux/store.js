//createSstore
// import { createStore } from 'redux'
// import rootReducer from './reducer'

// let store = createStore(rootReducer)

// store.subscribe(() => console.log(store.getState()))
import rootReducer from './reducer'

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({ 
   reducer:{
     reducer: rootReducer 
   }
   
})


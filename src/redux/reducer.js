import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
  data: [],
  myFavorites: [],
  myFavoritesOrigin: []

};
export const rootReducer = createSlice({
  name: "characters",
  initialState: initialState,

  reducers: {
    add_fav: (state = initialState, action) => {
      const existe = state.data.find((data) => data.id === action.payload);
      if (!existe) {
        state.data.unshift(action.payload);
        // return{
        //    ...state,
        //    data : [...state.data, action.payload]
        // }
      } else {
        return alert("Ya existe el personaje");
      }
    },
    add_myFavorites: (state = initialState, action) => {
      const myFavorites = state.myFavoritesOrigin.find(
        (item) => item.id === action.payload
      );
      if (!myFavorites) {
        state.myFavorites.push(action.payload);
        state.myFavoritesOrigin.push(action.payload);
      }
    },
    filter: (state = initialState, action)=>{
      const newFilter =  state.myFavoritesOrigin.filter((ch)=> ch.gender === action.payload)
      return{
        ...state,
        myFavorites : [newFilter]
      }
    },
    order: (state = initialState, action)=>{
      const newOrder =  state.myFavoritesOrigin.sort((a,b)=>{
        if(a.id > b.id){
          return 'Ascendente' === action.payload ? 1 : -1
        }
        if(a.id < b.id){
          return 'Descendente' === action.payload ? 1 : -1
        }
        return 0

      })
      return{
        ...state,
        myFavorites : newOrder
      }
    },
    remove_character: (state = initialState, action) => {
      let result = state.characters.find(
        (data) => data.id === action.payload.id
      );
     
      state.characters.splice(state.characters.indexOf(result), 1);
    },
    reset: (state = initialState, action) => {
      return{
        ...state,
        myFavorites :[...state.myFavoritesOrigin]
      }
    },
    remove_fav: (state, action) => {
      let result = state.data.find((data) => data.id === action.payload.id);

      state.data.splice(state.data.indexOf(result), 1);
      
    },
    remove_myFavorites: (state, action) => {
      let removeFavoritesOrigin = state.myFavoritesOrigin.find(
        (fav) => fav.id === action.payload.id)
        let removeFavorites = state.myFavoritesOrigin.find(
          (fav) => fav.id === action.payload.id
      );
      state.myFavorites.splice(state.myFavorites.indexOf(removeFavorites), 1);
      state.myFavoritesOrigin.splice(state.myFavoritesOrigin.indexOf(removeFavoritesOrigin), 1);
    },
    edit_fav: (state, action) => {
      let edit = state.data.find((data) => data.id === action.payload.id);
      if (edit) {
        return {
          ...state,
          data: [edit, action.payload],
        };
      }
    },
    add_characters: (state = initialState, action) => {
      return {
        ...state,
        characters: [action.payload],
      };
    },
  },
});

export const {
  add_fav,
  remove_fav,
  edit_fav,
  add_characters,
  add_myFavorites,
  remove_myFavorites,
  remove_character,
  reset,
  order,
  filter
} = rootReducer.actions;
export default rootReducer.reducer;

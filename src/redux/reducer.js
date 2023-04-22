import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
  data: [],
  myFavorites: [],
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
      const myFavorites = state.myFavorites.find(
        (item) => item.id === action.payload
      );
      if (!myFavorites) {
        state.myFavorites.push(action.payload);
      }
    },
    remove_character: (state = initialState, action) => {
      let result = state.characters.find(
        (data) => data.id === action.payload.id
      );
      console.log(action.payload.id);
      state.characters.splice(state.characters.indexOf(result), 1);
    },
    remove_fav: (state, action) => {
      let result = state.data.find((data) => data.id === action.payload.id);

      state.data.splice(state.data.indexOf(result), 1);
    },
    remove_myFavorites: (state, action) => {
      let removeFAvorites = state.myFavorites.find(
        (fav) => fav.id === action.payload.id
      );
      state.myFavorites.splice(state.myFavorites.indexOf(removeFAvorites), 1);
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
} = rootReducer.actions;
export default rootReducer.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  myFavorites: [],
};
export const rootReducer = createSlice({
  name: "characters",
  initialState: initialState,

  reducers: {
    add_fav: (state = initialState, action) => {
      console.log(action.payload);
      const existe = state.data.find((data) => data.id === action.payload);
      if (!existe) {
        state.data.push(action.payload);
        // return{
        //    ...state,
        //    data : [...state.data, action.payload]
        // }
      } else {
        return alert("Ya existe el personaje");
      }
    },
    remove_fav: (state, action) => {
      console.log("entro", action.payload);
      
    let result =  state.data.filter(data => data.id !== action.payload.id);
    
      state.data = result
    
    },
  },
});

export const { add_fav, remove_fav } = rootReducer.actions;

export default rootReducer.reducer;

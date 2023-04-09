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
      let result = state.data.find((data) => data.id === action.payload.id);

      state.data.splice(state.data.indexOf(result), 1);
    },
    edit_fav: (state, action) => {
      let edit = state.data.find((data) => data.id === action.payload.id);
      if (edit) {
        return {
          ...state,
          data:[ edit, action.payload],
        };
      }
    },
  },
});

export const { add_fav, remove_fav,edit_fav } = rootReducer.actions;

export default rootReducer.reducer;

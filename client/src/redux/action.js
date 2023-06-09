import {
  ADD_FAV,
  REMOVE_FAV,
  ORDER,
  FILTER,
  RESET,
  ADD_HOME,
  REMOVE_HOME,
  EDIT_FAV,
  ADD_DATA,
  REMOVE_DATA,
} from "./action.types";
import axios from "axios"

export function addHome(data) {
  return {
    type: ADD_HOME,
    payload: data,
  };
}
export function removeHome(id) {
  return {
    type: REMOVE_HOME,
    payload: id,
  };
}
export function addData(data) {
  return {
    type: ADD_DATA,
    payload: data,
  };
}
export function removeData(id) {
  return {
    type: REMOVE_DATA,
    payload: id,
  };
}

export function addFav(char) {
  return function (dispatch) {
    axios
      .post("http://localhost:3001/rickandmorty/favs", char)
      .then((response) => {
        return dispatch({
          type: ADD_FAV,
          payload: response.data,
        });
      });
  };
}
export function removeFav(id) {
  return function (dispatch) {
    axios
    .delete(`http://localhost:3001/rickandmorty/favs/${id}`)
    .then((response) =>{
      return dispatch({
        type: REMOVE_FAV,
        payload:response.data
      })
    })
    
  }
  
}
export function order(order) {
  return {
    type: ORDER,
    payload: order,
  };
}
export function filter(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}
export function reset() {
  return {
    type: RESET,
  };
}
export function edit_fav(id) {
  return {
    type: EDIT_FAV,
    payload: id,
  };
}

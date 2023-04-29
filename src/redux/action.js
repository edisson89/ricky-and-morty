import { ADD_FAV, REMOVE_FAV, ORDER, FILTER, RESET } from "./action.types";

export function addFav(data) {
  return {
    type: ADD_FAV,
    payload: data,
  };
}
export function removeFav(id) {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
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
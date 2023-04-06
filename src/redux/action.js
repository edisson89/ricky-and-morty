import { ADD_FAV, REMOVE_FAV } from "./action.types";

export function addFav(data) {
    return {
        type: ADD_FAV,
        payload:data
    }
}
export  function removeFav(id){
    return{
        type: REMOVE_FAV,
        payload: id
    }
}
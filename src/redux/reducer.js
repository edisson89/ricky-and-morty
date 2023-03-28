import { ADD_FAV, REMOVE_FAV } from "./action.types";

const initialState={
    data :[],
    myFavorites: []
}
export default function rootReducer(state = initialState,{type,payload}) {
    switch (type) {
        case ADD_FAV:
            return{
                ...state,
            
            }
         case REMOVE_FAV:
            return{
               ...state,
            }   
           
    
        default:
            break;
    }
}

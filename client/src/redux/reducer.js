import {
  ADD_DATA,
  ADD_FAV,
  ADD_HOME,
  FILTER,
  ORDER,
  REMOVE_DATA,
  REMOVE_FAV,
  REMOVE_HOME,
  RESET,
} from "./action.types";

const initialState = {
  home: [],
  data: [],
  myFavorites: [],
  myFavoritesOrigin: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_HOME:
      return {
        ...state,
        home: [...state.home, payload],
      };
    case REMOVE_HOME:
      const rmHome = state.home.filter((item) => item.id !== payload);
      return {
        ...state,
        home: rmHome,
      };
    case ADD_DATA:
      return {
        ...state,
        data: [...state.data, payload],
      };

    case REMOVE_DATA:
      const rmData = state.data.filter((item) => item.id !== Number(payload));
      return {
        ...state,
        data: rmData,
      };

    case ADD_FAV:
      return {
        ...state,
        myFavorites: payload,
        myFavoritesOrigin: payload,
      };
    case REMOVE_FAV:
      
      return {
        ...state,
        myFavorites: payload,
        myFavoritesOrigin: payload,
      };

    case FILTER:
      const newFilter = state.myFavoritesOrigin.filter(
        (item) => item.gender === payload
      );
      return {
        ...state,
        myFavorites: newFilter,
      };
    case ORDER:
      const newOrder = state.myFavoritesOrigin.sort((a, b) => {
        if (a.id > b.id) {
          return "Ascendente" === payload ? 1 : -1;
        }
        if (a.id < b.id) {
          return "Descendente" === payload ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        myFavorites: newOrder,
      };
    case RESET:
      return {
        ...state,
        myFavorites: [...state.myFavoritesOrigin],
      };

    default:
      return {
        ...state,
      };
  }
}

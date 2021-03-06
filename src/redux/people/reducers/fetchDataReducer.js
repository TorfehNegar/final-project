/* eslint-disable */
import {GET_ALL} from "../types/type";
import {INITIALSTATS} from "../states";

export const personsReducer = (state = INITIALSTATS, action) => {
  switch (action.type) {
  case GET_ALL:
    state=[...action.payload];
    state.map((item, i) => {
      item.id = i + 1;
      item.isFavorite= false;
    });
    return state; 
  default:
    return state;
  }
};

import {GET_PAGINATION_PEOPLES,CHANGE_FAVORITE} from "../types/type";


export const peoplesReducer = (state=[], action) => {
  switch (action.type) {
  case GET_PAGINATION_PEOPLES:
    return [...state,...action.payload].map((item, i) => {
      return {
        ...item,
        isFavorite:false,
        id:i+1
      };
    });
  case CHANGE_FAVORITE:
    return state.map((item)=>{
      if (action.payload.id===item.id){
        return {
          ...item,
          isFavorite:!action.payload.isFavorite
        };
      }else{return item;}
    });
    
  default:
    return state;
  }
};

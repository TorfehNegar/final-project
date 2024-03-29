import {getPaginationPeoples} from "../../../utils/Api/service/index";
import {CHANGE_FAVORITE, GET_PAGINATION_PEOPLES} from "../types/type";
export const getAllPeoples = (nextPage) => {
  return async (dispatch) => {
    const { data } = await getPaginationPeoples(nextPage);
      
    await dispatch({ type: GET_PAGINATION_PEOPLES, payload: data.results });
  };
};


export const changeFavorite =  (id,isFavorite) => {
  return {
    type: CHANGE_FAVORITE,
    payload: {
      id,
      isFavorite
    }
  };
};
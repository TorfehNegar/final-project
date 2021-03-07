import {getPaginationPeoples} from "../../../utils/Api/service/index";
import {CHANGE_FAVORITE, GET_PAGINATION_PEOPLES} from "../types/type";
export const getAllPeoples = () => {
  return async (dispatch) => {
    const { data } = await getPaginationPeoples();
      
    await dispatch({ type: GET_PAGINATION_PEOPLES, payload: data.results });
  };
};


export const changeFavorite =  (data) => {
  return {
    type: CHANGE_FAVORITE,
    payload: data
  };
};
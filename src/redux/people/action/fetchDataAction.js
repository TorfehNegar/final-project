import {getPaginationPeoples} from "../../../utils/service/index";
import {GET_ALL} from "../types/type";
export const getAllPersons = () => {
  return async (dispatch) => {
    const { data } = await getPaginationPeoples();
      
    await dispatch({ type: GET_ALL, payload: data.results });
  };
};

/* eslint-disable */
import {getPaginationPeoples} from "./../../../utils/service/index";



export const getPeoples = () => {
  return async dispatch => {
    const {data}=await getPaginationPeoples();
    await dispatch({ type: "GET_DATA", payload: data.results });
  };
};
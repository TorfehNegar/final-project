import http from "..";
import config from "../config/config.json";

export const getPaginationPeoples = async pageNumber => {
  try{
    const res = await http.get(`${config.swapiapi}/people/${pageNumber?"?page="+ pageNumber:""}`);
    return res;
  } catch(err) {
    throw err;
  }
};

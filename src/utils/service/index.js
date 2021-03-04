import http from "../Api";
import config from "../config/config.json";

export const getAllPeoples = () => {
  return http.get(`${config.swapiapi}/people/`);
};

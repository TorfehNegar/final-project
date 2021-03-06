import { combineReducers } from "redux";
import { personsReducer } from "./fetchDataReducer";

export const rootReducer = combineReducers({
  peoples:personsReducer
});

import { combineReducers } from "redux";
import { peoplesReducer } from "./fetchDataReducer";

export const rootReducer = combineReducers({
  peoples:peoplesReducer
});

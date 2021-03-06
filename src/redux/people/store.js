import { createStore, applyMiddleware, compose } from "redux";
import {rootReducer} from './reducers';
import thunk from "redux-thunk";
import { getAllPersons } from "./action/fetchDataAction";


export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
  )
);

store.dispatch(getAllPersons());

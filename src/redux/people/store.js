import { createStore, applyMiddleware, compose } from "redux";
import {rootReducer} from './reducers';
import thunk from "redux-thunk";
import {  getAllPeoples } from "./action/fetchDataAction";


export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
  )
);

store.dispatch(getAllPeoples());



//,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

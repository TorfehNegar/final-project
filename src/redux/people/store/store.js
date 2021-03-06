import { createStore, applyMiddleware, compose } from "redux";
import { personsReducer } from "../reducers/reducer";
import thunk from "redux-thunk";

export const store = createStore(
  personsReducer,
  compose(
    applyMiddleware(thunk),
  )
);

//subscribe

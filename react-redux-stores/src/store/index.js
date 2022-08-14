import { createStore } from "redux";
import { count } from "../App";

const reducerFn = (state = { counter: 0, addItems }, action) => {
  //Synchronous Function
  // not mutate the original state
  

  return state;
};

const addItems = (state = { totaL: 34 }, action) => {
  return state.totaL;
};

const store = createStore(reducerFn);

export { store };

console.log(count)
import { createStore } from "redux";
import { count } from "../App";

const reducerFn = (state = { counter: 0 }, action) => {
  //Synchronous Function
  // not mutate the original state
  if (action.type === "INCREMENT") {
    return { counter: (state.counter += 1) };
  } else if (action.type === "DECREMENT") {
    return { counter: (state.counter += -1) };
  } else if (action.type === "ADD") {
    return { counter: state.counter + action.payload };
  }
  return state;
};

const store = createStore(reducerFn);

export { store };

console.log(count);

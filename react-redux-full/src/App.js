import "./styles.css";

//import useSelector and useDispatch
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const counterxxx = useSelector((state) => {
    return [state.counter];
  });

  /*create useDispatch an action  */
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const addBy = () => {
    dispatch({ type: "ADD", payload: 10 });
  };
  return (
    <div className="App">
      <h1>Hello Counter App</h1>
      <h2>Counter: {counterxxx}</h2>

      {/* create button */}
      <button onClick={increment}>Increment Button</button>
      <button onClick={decrement}>Increment Button</button>
      <button onClick={addBy}>Add +10 Value</button>
    </div>
  );
}

//##logic reducerFn
const zeR0 = 0;
const reducerFn = (state = { counter: zeR0 }, action) => {
  console.log(state);
  console.log(state.counter);
  console.log(action);
};
reducerFn(undefined, 99);

//##Logic destructuring function
console.log("logic Destructuring");
//logic <Provider store={(store, item)}
const vehicle = {
  truck: "Toyota",
  item: 4
};
const { truck, item } = vehicle;
const store = { truck, item };
console.log(truck);
console.log(item);
console.log(store);

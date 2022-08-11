import "./styles.css";
import React from "react";

{
  /*Props*/
}
function AdditionProps(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </div>
  );
}

{
  /*Destructuring Props*/
}
function AdditionDestruction({ name, description, price }) {
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      {/*Props*/}
      <p>
        <AdditionProps
          name={"myname props"}
          description={"props"}
          price={"50"}
        />
      </p>

      {/*Destructuring Props*/}
      <p>
        <AdditionDestruction
          name={"crees"}
          description={"horay"}
          price={"rp/50"}
        />
      </p>
    </div>
  );
}

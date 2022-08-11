import "./styles.css";
import React, { useState } from "react";

function FavoriteWord() {
  const [word, setWord] = useState("red");
  const ChangeWord = () => {
    setWord("blue");
  };

  return (
    <>
      <h1>I have word {word}</h1>
      <button onClick={ChangeWord}>ChangeColor</button>
    </>
  );
}

const StateObject = () => {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: 2444,
    color: "red",
  });

  const UpdateYear = () => {
    // setCar((object) => {
    //   return { ...object, year: 1774 };
    // });

     setCar({ ...car, year: 2009 });
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button onClick={UpdateYear}>UpdateYear</button>
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Change Word</h1>
      <FavoriteWord />
      <StateObject />
    </div>
  );
}

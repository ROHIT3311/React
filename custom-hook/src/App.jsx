import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useCounter from "./hook/useCounter";

function App() {
  const { counter, increment, decrement, reset } = useCounter(5);
  return (
    <>
      <p>{counter}</p>
      <button onClick={increment}>inc</button>
      <button onClick={decrement}>dec</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

export default App;

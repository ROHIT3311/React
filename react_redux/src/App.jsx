import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counter/CounterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <>
      <button onClick={handleIncrement}>+</button>
      <h1>count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
    </>
  );
}

export default App;

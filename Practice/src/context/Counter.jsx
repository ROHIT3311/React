import React from "react";
import { useContext } from "react";
import { CounterContext } from "./counterContext";

const Counter = () => {
  const { value, increment } = useContext(CounterContext);

  return (
    <div>
      <p>{value}</p>
      <button onClick={increment}>inc</button>
    </div>
  );
};

export default Counter;

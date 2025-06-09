import React from "react";
import useCounter from "./useCounter";

const Counter = () => {
  const { counter, increment, decrement } = useCounter(5);
  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>inc</button>
      <button onClick={decrement}>dec</button>
    </div>
  );
};

export default Counter;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counterActions";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;

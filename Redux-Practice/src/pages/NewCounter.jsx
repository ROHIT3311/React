import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../feature/counterSlice";

const NewCounter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default NewCounter;

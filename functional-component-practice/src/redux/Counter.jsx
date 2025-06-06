import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
} from "../../../Redux-Practice/src/feature/counterSlice";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);

  const inc = () => {
    dispatch(increment());
  };

  const dec = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <p>{counter}</p>
      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
    </div>
  );
};

export default Counter;

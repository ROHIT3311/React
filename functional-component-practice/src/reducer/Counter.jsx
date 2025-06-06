import React, { useReducer } from "react";
import { Actions, counterReducer, Initial_State } from "./ReducerCounter";

const Counter = () => {
  const [state, disptach] = useReducer(counterReducer, Initial_State);

  const increment = () => {
    disptach({ type: Actions.INCREMENT });
  };
  const decrement = () => {
    disptach({ type: Actions.DECREMENT });
  };
  return (
    <div>
      <p>{state.counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;

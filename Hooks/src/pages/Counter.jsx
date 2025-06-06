import React, { useReducer } from "react";
import {
  ACTIONS,
  CounterReducer,
  Initial_State,
} from "../reducers/CounterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(CounterReducer, Initial_State);

  const increment = () => {
    dispatch({
      type: ACTIONS.Increment,
    });
  };

  const decrement = () => {
    dispatch({
      type: ACTIONS.Decrement,
    });
  };

  return (
    <div>
      <h3>{state.count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}> Decrement</button>
    </div>
  );
};

export default Counter;

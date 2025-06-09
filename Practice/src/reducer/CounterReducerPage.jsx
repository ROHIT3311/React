import React from "react";
import { useReducer } from "react";
import { counterReducer, Initial_State, Actions } from "./counterReducer";

const CounterReducerPage = () => {
  const [state, dispatch] = useReducer(counterReducer, Initial_State);
  return (
    <div>
      <p>{state.counter}</p>
      <button onClick={() => dispatch({ type: Actions.INCREMENT })}>inc</button>
      <button onClick={() => dispatch({ type: Actions.DECREMENT })}>dec</button>
    </div>
  );
};

export default CounterReducerPage;

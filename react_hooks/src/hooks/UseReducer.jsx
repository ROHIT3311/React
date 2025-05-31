import React, { useReducer, useState } from "react";

const UseReducer = () => {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increase":
        return { count: state.count + 1 };

      case "decrease":
        return { count: state.count - 1 };
      case "input":
        return { count: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatach] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatach({ type: "increase" })}>Increment</button>
      <button onClick={() => dispatach({ type: "decrease" })}>Decrement</button>
      <input
        value={state.count}
        type="number"
        onChange={(e) => dispatach({ type: "input", payload: e.target.value })}
      />
    </>
  );
};

export default UseReducer;

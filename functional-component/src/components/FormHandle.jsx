import React from "react";
import { useReducer } from "react";
import { ACTIONS, formReducer, INITIAL_STATE } from "../reducers/FormReduncer";

const FormHandle = () => {
  const [state, disptach] = useReducer(formReducer, INITIAL_STATE);

  const handleChange = (e) => {
    disptach({
      type: ACTIONS.INPUT_CHANGE,
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  const increaseAge = () => {
    disptach({
      type: ACTIONS.INCREASE_AGE,
    });
  };
  const decreaseAge = () => {
    disptach({
      type: ACTIONS.DECREASE_AGE,
    });
  };

  console.log(state);

  return (
    <form action="">
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      <select name="country" id="" onChange={handleChange}>
        <option value="-1">Select Country</option>
        <option value="india">India</option>
        <option value="usa">USA</option>
        <option value="uk">UK</option>
      </select>
      <div>
        <button type="button" onClick={decreaseAge}>
          -
        </button>
        Age is {state.age}
        <button type="button" onClick={increaseAge}>
          +
        </button>
      </div>
    </form>
  );
};

export default FormHandle;

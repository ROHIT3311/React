import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const CounterWithContext = () => {
  const data = useContext(CounterContext);
  console.log(data);
  return (
    <div>
      <p> {data}</p>
    </div>
  );
};

export default CounterWithContext;

import React, { useCallback, useMemo, useState } from "react";
import Child from "./Child";

const UseMemo = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const show = useCallback(() => {
    console.log("Show");
  }, []);

  const memorizedObj = useMemo(() => {
    return {
      id: 101,
    };
  }, []);

  console.log("Render");
  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>increment</button>
      {/* <Child obj={{ id: 101 }} /> */}
      <Child show={show} />
    </div>
  );
};

export default UseMemo;

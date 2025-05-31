import React, { useCallback, useState } from "react";
import Header from "../components/Header";

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const fn1 = useCallback(() => {}, []);

  return (
    <>
      <Header fn1={fn1} />
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Click
      </button>
    </>
  );
};

export default UseCallback;

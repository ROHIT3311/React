import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const inc = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={inc}>Click</button>
    </>
  );
}

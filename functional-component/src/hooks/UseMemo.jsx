import { useMemo, useState } from "react";

export default function UseMemo() {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(2);

  const cube = useMemo(() => {
    console.log("Render");
    return number ** 3;
  }, [number]);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      {console.log("UI Render")}
      <h1>Cube : {cube}</h1>
      <button onClick={() => setNumber((prev) => prev + 1)}>
        Change Number
      </button>

      <h1>Counter : {counter}</h1>
      <button onClick={() => increment()}>Increment</button>
    </>
  );
}

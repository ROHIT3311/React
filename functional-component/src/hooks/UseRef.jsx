import { useEffect, useRef, useState } from "react";

export default function UseRef() {
  const [counter, setCounter] = useState(0);
  const prevCounter = useRef();

  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  useEffect(() => {
    prevCounter.current = counter;
    console.log("use effect");
  }, [counter]);

  const getButton = useRef();

  const handleClick = (e) => {
    getButton.current = e.target;
    console.log(getButton.current);
  };
  return (
    <>
      <h1>Previous : {prevCounter.current}</h1>
      <h1>Current : {counter}</h1>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={(e) => handleClick(e)}>UseRef</button>
    </>
  );
}

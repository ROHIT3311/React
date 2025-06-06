import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [counter, setCounter] = useState(0);
  const refvalue = useRef(counter);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  useEffect(() => {
    refvalue.current = counter;
    console.log(refvalue.current);
  }, [counter]);

  console.log("Render");
  return (
    <div>
      <p>{refvalue.current}</p>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default UseRef;

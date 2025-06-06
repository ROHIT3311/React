import React, { use, useEffect, useRef, useState } from "react";

const UseRef = () => {
  const counterRef = useRef(0);
  const boxRef = useRef(null);

  const increment = () => {
    counterRef.current = counterRef.current + 1;
    console.log(counterRef.current);
  };

  const changeColor = () => {
    boxRef.current.style.backgroundColor = "Blue";
  };
  console.log("render");

  return (
    <div>
      <p>counter : {counterRef.current}</p>
      <button onClick={increment}>increment</button>

      <div
        style={{ height: "100px", width: "100px", backgroundColor: "red" }}
        ref={boxRef}
      ></div>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default UseRef;

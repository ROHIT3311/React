import { useState } from "react";
import Child from "./child";

export default function Parent() {
  const [pAge, setPAge] = useState(10);
  const [cAge, setCAge] = useState(10);

  const changeAge = () => {
    setPAge(pAge + 1);
    console.log("Parent rerendered");
  };

  return (
    <>
      <h1>Parent Age: {pAge}</h1>
      <button onClick={changeAge}>Click</button>
      <Child age={cAge} />
    </>
  );
}

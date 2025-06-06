import React, { use, useState } from "react";
import Child1 from "./Child1";
import ContextProvider from "../hooksDemo/UseContext";

const Parent = () => {
  const [age, setAge] = useState(20);
  console.log("Parent");
  return (
    <ContextProvider value={{ age, setAge }}>
      <p>Parent</p>
      <Child1 />
    </ContextProvider>
  );
};

export default Parent;

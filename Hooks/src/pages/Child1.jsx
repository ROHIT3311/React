import React, { useContext } from "react";
import { UseContext } from "../hooksDemo/UseContext";
import Child2 from "./Child2";

const Child1 = () => {
  console.log("Child 1");
  return (
    <div>
      <Child2 />
    </div>
  );
};

export default Child1;

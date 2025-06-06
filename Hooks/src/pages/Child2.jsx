import React from "react";
import Child3 from "./Child3";

const Child2 = () => {
  console.log("Child 2");
  return (
    <div>
      <p>Child 2</p>
      <Child3 />
    </div>
  );
};

export default Child2;

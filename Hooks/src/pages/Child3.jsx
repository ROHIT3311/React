import React, { useContext } from "react";
import { UseContext } from "../hooksDemo/UseContext";

const Child3 = () => {
  const { age, setAge } = useContext(UseContext);
  console.log("Child 3");
  return (
    <div>
      <p>{age}</p>
      <button onClick={() => setAge((prev) => 30)}>Change Age</button>
    </div>
  );
};

export default Child3;

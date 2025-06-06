import React, { use, useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(0);

  //   const increment = () => {
  //     setCounter((prev) => counter + 1);
  //   };

  function increment() {
    setCounter((prev) => counter + 1);
  }

  const [obj, setObj] = useState({ name: "Rohit", age: 22 });
  const changeAge = () => {
    setObj((prev) => ({ ...prev, age: 40 }));
  };

  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const changeArr = () => {
    setArr((prev) => prev.slice(0, -1));
  };
  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
      <div>
        <p>{obj.name}</p>
        <p>{obj.age}</p>
        <button onClick={changeAge}>Change Age</button>
      </div>
      <div>
        {arr.map((val) => (
          <p>{val}</p>
        ))}
        <button onClick={changeArr}>change arr</button>
      </div>
    </div>
  );
};

export default UseState;

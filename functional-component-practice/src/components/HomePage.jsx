import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  const [counter, setCounter] = useState(0);
  const [obj, setObj] = useState({ name: "Rohit", age: 20 });
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  //   const increment = () => {
  //     setCounter(counter + 1);
  //   };

  const countRef = useRef(counter);

  const increment = function () {
    setCounter(counter + 1);
  };

  const change = function () {
    setObj({ ...obj, age: 30 });
  };

  const changeArr = function () {
    setArr([...arr, 6, 7]);
  };

  useEffect(() => {
    console.log("useEffect");
    countRef.current = counter;
    console.log("Counter Ref : ", countRef.current);
  }, [counter]);
  return (
    <>
      {console.log("Render")}
      <div>
        <h1>Counter State</h1>
        <h2>Counter : {counter}</h2>
        <button onClick={increment}>Increment</button>

        <h1>Object State</h1>
        <h2>{obj.name}</h2>
        <h2>{obj.age}</h2>
        <button onClick={change}>Change Age</button>

        <h1>Array State</h1>
        <h2>{arr.join(" ")} </h2>
        <button onClick={changeArr}>Change Array</button>
      </div>
    </>
  );
}

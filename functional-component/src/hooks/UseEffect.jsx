import { useEffect, useState } from "react";

export default function UseEffect() {
  const [counter, setCounter] = useState(0);

  const [obj, setObj] = useState({ name: "Rohit", age: 22 });

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const changeName = () => {
    setObj((prev) => ({ ...prev, name: (prev.name = "John") }));
  };

  useEffect(() => {
    // console.log(counter);
    console.log("use effect");
  }, [counter]);
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <p>{obj.name}</p>
      <button onClick={() => changeName()}>Change Name</button>
      <p>{obj.age}</p>
    </>
  );
}

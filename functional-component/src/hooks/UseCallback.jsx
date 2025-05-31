import { useCallback, useState } from "react";
import Child from "../components/Child";

export default function UseCallback() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const handleClick = useCallback(() => {
    console.log("H1 Clicked");
  }, []);
  
  console.log("Parent");
  return (
    <>
      <Child fn={handleClick} />
      <h1>Counter : {counter}</h1>
      <button onClick={increment}>Increment</button>
    </>
  );
}

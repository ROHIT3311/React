import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function Parent() {
  const [counter, setCounter] = useState(0);
  const [obj, setObj] = useState({ name: "Rohit", age: 20 });
  const increment = () => {
    setCounter(counter + 1);
  };

  const changeAge = () => {
    setObj({ ...obj, age: 30 });
  };

  useEffect(() => {
    console.log("useEffect");
  }, [obj.age]);

  const changeRef = useRef("");
  const onChangeRef = () => {
    changeRef.current = changeRef.current.value;
    console.log(changeRef.current);
  };

  const colorRef = useRef(null);
  const colorChange = () => {
    colorRef.current.style.backgroundColor = "blue";
  };
  return (
    <>
      <p>{counter}</p>
      <button onClick={increment}>increment</button>
      <p>{obj.name}</p>
      <p>{obj.age}</p>
      <button onClick={changeAge}>changeAge</button>
      <input type="text" ref={changeRef} />
      <button onClick={onChangeRef}>onChangeRef</button>
      <div
        style={{ height: "100px", width: "100px", backgroundColor: "red" }}
        ref={colorRef}
      ></div>
      <button onClick={colorChange}>change Color</button>
    </>
  );
}

export default Parent;

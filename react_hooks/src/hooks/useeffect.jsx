import { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }, [count]);
  return (
    <>
      <h1>{count}</h1>
    </>
  );
}

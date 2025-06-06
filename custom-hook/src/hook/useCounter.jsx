import { useState } from "react";

export default function useCounter(initalValue = 0) {
  const [counter, setCounter] = useState(initalValue);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(initalValue);

  return { increment, decrement, reset, counter };
}

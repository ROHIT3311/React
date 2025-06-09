import { useState } from "react";
import { createContext } from "react";
import { increment } from "../redux/counterSlice";

export const CounterContext = createContext();

export function ContextProvider({ children, value: initalValue }) {
  const [value, setValue] = useState(initalValue);
  const increment = () => setValue((prev) => prev + 1);
  return (
    <CounterContext.Provider value={{ value, increment }}>
      {children}
    </CounterContext.Provider>
  );
}

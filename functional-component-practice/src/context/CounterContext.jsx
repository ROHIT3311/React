import { createContext } from "react";

export const CounterContext = createContext();

const ContextProvider = ({ value, children }) => {
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

export default ContextProvider;

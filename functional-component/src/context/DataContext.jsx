import { createContext, useContext } from "react";

export const DataContext = createContext();

export default function ContextProvider({ children }) {
  const sharedData = {
    name: "React User",
    age: 25,
  };
  return (
    <>
      <DataContext.Provider value={sharedData}>{children}</DataContext.Provider>
    </>
  );
}

import React, { createContext } from "react";

export const UseContext = createContext();

const ContextProvider = ({ children, value }) => {
  return (
    <>
      <UseContext.Provider value={value}>{children}</UseContext.Provider>
    </>
  );
};

export default ContextProvider;

import { createContext } from "react";

export const PhoneContext = createContext();

const ContextProvider = (props) => {
  const phone = "123456789";

  return (
    <PhoneContext.Provider value={phone}>
      {props.children}
    </PhoneContext.Provider>
  );
};

export default ContextProvider;

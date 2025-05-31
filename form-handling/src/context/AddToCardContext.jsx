import { createContext, useState } from "react";

export const AddToCardProductContext = createContext();

const ContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    setCartItem((prev) => [...prev, product]);
  };

  return (
    <AddToCardProductContext.Provider value={{ cartItem, addToCart }}>
      {children}
    </AddToCardProductContext.Provider>
  );
};

export default ContextProvider;

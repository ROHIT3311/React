import { createContext, useState } from "react";
import App from "../App";

export const AddToCart = createContext();

export default function ContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <>
      <AddToCart.Provider value={[cart, setCart]}>
        {children}
      </AddToCart.Provider>
    </>
  );
}

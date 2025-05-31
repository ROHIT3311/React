import { useState } from "react";
import { createContext } from "react";

export const Theme = createContext();

export default function ContextProvider({ children }) {
  const [theme, setTheme] = useState("black");

  return <Theme.Provider value={[theme, setTheme]}>{children}</Theme.Provider>;
}

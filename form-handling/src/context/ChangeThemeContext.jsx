import { createContext, useState } from "react";

export const ChangeThemeContext = createContext();

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ChangeThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ChangeThemeContext.Provider>
  );
};

export default ContextProvider;

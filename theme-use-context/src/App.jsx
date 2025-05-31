import { useContext } from "react";
import { Theme } from "./context/theme";

function App() {
  const [theme, setTheme] = useContext(Theme);

  const changeTheme = () => {
    theme === "black" ? setTheme("white") : setTheme("black");
  };
  return (
    <div style={{ backgroundColor: theme }}>
      <h1>Hello with theme: {theme}</h1>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
}

export default App;

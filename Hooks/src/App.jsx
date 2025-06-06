import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseState from "./hooksDemo/UseState";
import UseEffect from "./hooksDemo/UseEffect";
import UseRef from "./hooksDemo/UseRef";
import UseMemo from "./hooksDemo/UseMemo";
import Leaderboard from "./hooksDemo/Leaderboard";
import Parent from "./pages/Parent";
import Counter from "./pages/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}
      <UseMemo />
      {/* <Leaderboard /> */}
      {/* <Parent /> */}
      {/* <Counter /> */}
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Search from "./components/Search";

function App() {
  const [count, setCount] = useState(0);
  const items = ["hi", "hello", "yz"];
  return (
    <>
      <Search items={items} />
    </>
  );
}

export default App;

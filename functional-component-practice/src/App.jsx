import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import UseRef from "./components/UseRef";
import CounterWithContext from "./components/CounterWithContext";
import Counter from "./redux/Counter";

function App() {
  return (
    <>
      {/* <HomePage name="Rohit" /> */}
      {/* <UseRef /> */}
      {/* <CounterWithContext /> */}
      {/* <Counter /> */}
      <Counter />
    </>
  );
}

export default App;

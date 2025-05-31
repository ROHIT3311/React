import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import Parent from "./components/Parent";

function App() {
  return (
    <>
      <Parent age="20" />
    </>
  );
}

export default App;

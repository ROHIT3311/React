import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import User from "./components/User/user";
import Button from "./components/button/button";
import Counter from "./components/counters/counter";
import { Profiler } from "react";

function callbackFunction(
  id,
  phase,
  actualTime,
  baseTime,
  startTime,
  commitTime
) {
  console.log(`Component: ${id}`);
  console.log(`Phase: ${phase}`);
  console.log(`Actual Time: ${actualTime}ms`);
  console.log(`Base Time: ${baseTime}ms`);
  console.log(`Start Time: ${startTime}`);
  console.log(`Commit Time: ${commitTime}`);
}

function App() {
  return (
    <Profiler id="MyComponent" onRender={callbackFunction}>
      <Counter />
    </Profiler>
  );
}

export default App;

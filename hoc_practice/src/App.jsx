import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CCApp from "./components/CCApp";
import USD from "./components/USD";
import Pound from "./components/Pound";

function App() {
  return (
    <>
      <CCApp
        abc={(amount) => {
          return (
            <>
              <USD amount={amount} />
              <Pound amount={amount} />
            </>
          );
        }}
      />
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";
import List from "./components/List";
import UseState from "./hooks/UseState";
import UseEffect from "./hooks/UseEffect";
import UseRef from "./hooks/UseRef";
import UseMemo from "./hooks/UseMemo";
import UseCallback from "./hooks/UseCallback";
import GrandParent from "./components/GrandParent";
import FormHandle from "./components/FormHandle";

function App() {
  return (
    <>
      {/* <Dashboard
        flag={true}
        render={(isOpen) => {
          return isOpen ? <h1>Hello 2</h1> : <h1>Not Opened</h1>;
        }}
      /> */}
      {/* <List /> */}
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      {/* <GrandParent /> */}
      <FormHandle />
    </>
  );
}

export default App;

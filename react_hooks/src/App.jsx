import { use, useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseState from "./hooks/usestate";
import UseEffect from "./hooks/useeffect";
import UseRef from "./hooks/useref";
import UseMemo from "./hooks/usememo";
import Parent from "./components/parent";
import UseCallback from "./hooks/usecallback";
import { PhoneContext } from "./context/PhoneContext";
import Child from "./components/child";
import UseReducer from "./hooks/UseReducer";
import UseActionState from "./hooks/UseActionState";

function App() {
  const phone = useContext(PhoneContext);
  return (
    <>
      {/* <UseMemo /> */}
      {/* <Parent /> */}
      {/* <UseCallback /> */}
      {/* <Child /> */}
      {/* <h1>Hello {phone}</h1> */}
      <UseReducer />
      {/* <UseActionState /> */}
    </>
  );
}

export default App;

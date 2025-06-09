import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Parent from "./functional-based/Parent";
import Form from "./customHook/Form";
// import Counter from "./customHook/Counter";
import GoBackPage from "./customHook/GoBackPage";
import Counter from "./context/Counter";
import CounterReducerPage from "./reducer/CounterReducerPage";
import { Suspense } from "react";
import React from "react";
const ReduxCounter = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./redux/ReduxCounter"));
    }, 2000);
  });
});
// import Parent from "./class-based/Parent";

function App() {
  return (
    <>
      {/* <Parent age="20" /> */}

      {/* <Parent /> */}
      {/* <Form /> */}
      {/* <Counter /> */}
      {/* <GoBackPage /> */}
      <Counter />
      {/* <CounterReducerPage /> */}
      {/* <Suspense fallback={<p>Loading</p>}>
        <ReduxCounter />
      </Suspense> */}
    </>
  );
}

export default App;

import React, { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./pages/Counter";
// import NewCounter from "./pages/NewCounter";
const NewCounter = React.lazy(() => import("./pages/NewCounter"));

function App() {
  return (
    <>
      <Suspense fallback={<div>loading.....</div>}>
        <NewCounter />
      </Suspense>
    </>
  );
}

export default App;

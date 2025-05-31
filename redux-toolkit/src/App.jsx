import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/addTodo";
import ThemeButton from "./components/themeButton";
import { useSelector } from "react-redux";

function App() {
  const currTheme = useSelector((state) => state.theme.theme);
  console.log(currTheme);

  return (
    <div style={{ backgroundColor: currTheme }}>
      <h1>Hello</h1>
      <ThemeButton />
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;

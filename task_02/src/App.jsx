import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChangeColor from "./components/changeColor/change_color";
import Container from "./components/container/container";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <ChangeColor></ChangeColor> */}
      <Container></Container>
    </>
  );
}

export default App;

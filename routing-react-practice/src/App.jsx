import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserDetails from "./components/UserDetails/userDetails";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import User from "./components/user/user";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserDetails />} />
        <Route path="user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

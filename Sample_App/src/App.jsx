import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home/home";
import UserDetails from "./components/UserDetails/userDetails";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import User from "./components/User/user";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Wrap everything in BrowserRouter for routing */}
      <BrowserRouter>
        <div>
          <ul>
            {/* Define a Link to navigate to the 'user/age' route */}
            <li>
              <Link to="/user">Go to User Age</Link>
            </li>
          </ul>

          {/* Define the routes */}
          <Routes>
            {/* Define the path for the user/age page */}
            <Route path="/user" element={<User />} />
            <Route path="/user/:id" element={<User />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

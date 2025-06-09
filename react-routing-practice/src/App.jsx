import { useState, Suspense } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import Child from "./components/Child";
import UserDetails from "./components/UserDetails";
import React from "react";

const User = React.lazy(() => import("./components/User"));

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/child">Child</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/child" element={<Child />} />
        <Route
          path="/users"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <User />
            </Suspense>
          }
        />
        <Route path="/userDetails/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

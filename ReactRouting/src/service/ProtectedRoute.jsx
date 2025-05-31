import React from "react";
import Payment from "../pages/Payment";
import Login from "../pages/Login";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

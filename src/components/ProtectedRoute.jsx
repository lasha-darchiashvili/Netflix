import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const ProtectedRoute = ({ children }) => {
  const { user, authFinished } = useContext(AuthContext);

  if (!user && authFinished) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;

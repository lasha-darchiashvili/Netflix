import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const ProtectedRouteForSigned = ({ children }) => {
  const { user, authFinished } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRouteForSigned;

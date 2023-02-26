import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "./pages/Landing";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedRouteForSigned from "./components/ProtectedRouteForSigned";

import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedRouteForSigned>
                <SignupPage />
              </ProtectedRouteForSigned>
            }
          />
          <Route
            path="/signin"
            element={
              <ProtectedRouteForSigned>
                <SigninPage />
              </ProtectedRouteForSigned>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "./components/Landing";
import Main from "./components/Main";

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
          <Route path="/movies" element={<Home />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "./components/Landing";
import Main from "./components/Main";

import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/movies" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

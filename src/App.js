import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "./components/Landing";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "./index.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/movies" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;

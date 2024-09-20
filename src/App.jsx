import React from "react";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Heart from "./routes/heart/Heart";
import Wrapper from "./components/wrapper/Wrapper";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heart" element={<Heart />} />
      </Routes>
    </div>
  );
}

export default App;

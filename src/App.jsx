import React from "react";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Heart from "./routes/heart/Heart";
import SinglePage from "./routes/singlePage/SinglePage";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heart" element={<Heart />} />
      </Routes>
      <SinglePage />
    </div>
  );
}

export default App;

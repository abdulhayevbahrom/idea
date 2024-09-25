import React from "react";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Heart from "./routes/heart/Heart";
import SinglePage from "./routes/singlePage/SinglePage";
import Compare from "./routes/compare/Compare";
import Card from "./routes/card/Card";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heart" element={<Heart />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/singlepage/:id" element={<SinglePage />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;

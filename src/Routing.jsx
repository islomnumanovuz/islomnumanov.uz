import React from "react";
import "./components/styles/main.scss";
import "./components/styles/animation.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeMain from "./components/Home/Main/HomeMain";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;

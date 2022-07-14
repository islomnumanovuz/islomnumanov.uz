import React from "react";
import "./components/styles/main.scss";
import "./components/styles/animation.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeMain from "./components/01 Home/Main/HomeMain";
import AboutInfo from "./components/02 About/AboutInfo";
import Portfolio from "./components/03 Portfolio/Portfolio";
import Reviews from "./components/05 Reviews/Reviews";
function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<AboutInfo />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;

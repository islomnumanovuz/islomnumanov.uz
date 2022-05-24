import React from "react";
import NavbarSection from "../01 Home/Navbar/NavbarSection";
import Reveal from "react-reveal/Reveal";
import PageInfo from "./PageInfo";
import Project from "./Project";
import Footer from "../04 Footer/Footer";

export default function Portfolio() {
  return (
    <>
      <Reveal effect="animNav" duration="750">
        <NavbarSection />
      </Reveal>
      <Reveal effect="fadeInUp" duration={1250}>
        <PageInfo />
      </Reveal>
      <Reveal effect="portfolioAnim" duration={1800}>
        <Project />
      </Reveal>
      <Footer />
    </>
  );
}

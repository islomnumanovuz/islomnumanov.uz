import React from "react";
import NavbarSection from "../Navbar/NavbarSection";
import Reveal from "react-reveal/Reveal";
import AboutInfo from "../About/AboutInfo";

const HomeMain = () => {
  return (
    <>
      <Reveal effect="animNavigation" duration="750">
        <NavbarSection />
      </Reveal>
      <AboutInfo />
    </>
  );
};

export default HomeMain;

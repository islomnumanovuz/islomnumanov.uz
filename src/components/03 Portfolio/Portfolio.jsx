import React from "react";
import NavbarSection from "../01 Home/Navbar/NavbarSection";
import Reveal from "react-reveal/Reveal";

export default function Portfolio() {
  return (
    <>
      <Reveal effect="animNav" duration="750">
        <NavbarSection />
      </Reveal>
    </>
  );
}

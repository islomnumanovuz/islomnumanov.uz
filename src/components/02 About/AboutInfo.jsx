import React, { useEffect, useState } from "react";
import db from "../firebase/config.js";
import { Reveal } from "react-reveal";
import NavbarSection from "../01 Home/Navbar/NavbarSection";

const AboutInfo = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    db.collection("portfolio").onSnapshot((snapshot) =>
      setPortfolios(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="about-info">
      {portfolios.map((portfolio) => (
        <>
          <Reveal effect="animNav" duration="750">
            <NavbarSection />
          </Reveal>
          <Reveal effect="fadeInUp" duration="2000">
            <div className="side2">
              <div className="side2-image">
                <img
                  className="side2__image"
                  src={portfolio.image}
                  alt="images"
                />
              </div>
            </div>
          </Reveal>
        </>
      ))}
    </div>
  );
};
export default AboutInfo;

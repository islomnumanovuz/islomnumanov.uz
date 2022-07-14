import NavbarSection from "../Navbar/NavbarSection";
import Reveal from "react-reveal/Reveal";
import React, { useEffect, useState } from "react";
import db from "../../firebase/config.js";
import { Link } from "react-router-dom";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";
import Typewriter from "typewriter-effect";

const HomeMain = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    db.collection("portfolio").onSnapshot((snapshot) =>
      setPortfolios(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <>
      <Reveal effect="animNav" duration="750">
        <NavbarSection />
      </Reveal>
      <>
        {portfolios.map((portfolio) => (
          <>
            <div className="home-info">
              <Reveal effect="fadeInUp" duration="800">
                <h4 className="home-info__title">Welcome!</h4>
                <h2 className="home-info__subtitle">
                  {portfolio.title + " "}
                  <Typewriter
                    className="type-animation"
                    options={{
                      strings: [
                        "Front-end developer",
                        "from Uzbekistan",
                        "Freelancer",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 150,
                      pauseFor: 2000,
                    }}
                  />
                </h2>
                <p className="home-info__description">Developer</p>
                <div className="button-group">
                  <Link className="btn-19" to={"/about"}>
                    <span className="text-container">
                      <span className="text">About me</span>
                    </span>
                  </Link>
                  <Link className="btn-19" to={"/portfolio"}>
                    <span className="text-container">
                      <span className="text">Portfolio</span>
                    </span>
                  </Link>
                </div>
                <div className="socialNet">
                  <a
                    className="links"
                    href="https://github.com/pandadevuz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon className="iconSvg" />
                  </a>
                  <a
                    className="links"
                    href="https://www.linkedin.com/in/islomdev/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <LinkedInIcon className="iconSvg" />
                  </a>
                  <a
                    className="links"
                    href="https://t.me/freedevuz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TelegramIcon className="iconSvg" />
                  </a>
                </div>
                <div className="effect-wrap">
                  <span className="effect effect-1"></span>
                  <span className="effect effect-2">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <span className="effect effect-3"></span>
                  <span className="effect effect-4"></span>
                  <span Name="effect effect-5 justify-content-between">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
              </Reveal>
            </div>
          </>
        ))}
      </>
    </>
  );
};

export default HomeMain;

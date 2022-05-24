import NavbarSection from "../Navbar/NavbarSection";
import Reveal from "react-reveal/Reveal";
import React, { useEffect, useState } from "react";
import db from "../../firebase/config.js";
import { Link } from "react-router-dom";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkIcon from "@material-ui/icons/Link";
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
                        "CEO HiDevs - Uzbekistan",
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
                  <Link className="linkBtn" to="/">
                    Read more
                  </Link>
                  <Link className="linkBtn" to="/">
                    <LinkIcon /> Portfolio
                  </Link>
                </div>
                <div className="socialNet">
                  <a className="links" href="#" target="_blank">
                    <GitHubIcon className="iconSvg" />
                  </a>
                  <a className="links" href="#" target="_blank">
                    <LinkedInIcon className="iconSvg" />
                  </a>
                  <a className="links" href="#" target="_blank">
                    <TelegramIcon className="iconSvg" />
                  </a>
                  <a className="links" href="#" target="_blank">
                    <FacebookIcon className="iconSvg" />
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

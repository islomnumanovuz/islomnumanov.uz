import React, { useEffect, useState } from "react";
import db from "../../firebase/config.js";
import { Link } from "react-router-dom";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkIcon from "@material-ui/icons/Link";
import Typewriter from "typewriter-effect";

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
          <div className="side2">
            <img className="side2__image" src={portfolio.image} alt="images" />
          </div>
          <div className="side1">
            <h1 className="about-info__title">
              {portfolio.title + " "}
              <Typewriter
                className="type-animation"
                options={{
                  strings: ["Front-end developer", "CEO HiDevs - Uzbekistan"],
                  autoStart: true,
                  loop: true,
                  delay: 150,
                  pauseFor: 2000,
                }}
              />
            </h1>
            <p className="about-info__description">{portfolio.description}</p>
            <div className="button-group">
              <Link className="linkBtn" to="/">
                Read more
              </Link>
              <Link className="linkBtn" to="/">
                <LinkIcon /> Portfolio
              </Link>
            </div>
            <div className="socialBtn">
              <a href="#" target="_blank">
                <GitHubIcon />
              </a>
              <a href="#" target="_blank">
                <LinkedInIcon />
              </a>
              <a href="#" target="_blank">
                <TelegramIcon />
              </a>
              <a href="#" target="_blank">
                <FacebookIcon />
              </a>
            </div>
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
        </>
      ))}
    </div>
  );
};
export default AboutInfo;

import React, { useEffect, useState } from "react";
import db from "../../firebase/config.js";
import { Link } from "react-router-dom";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";
import FacebookIcon from "@material-ui/icons/Facebook";
import Typewriter from "typewriter-effect";

const AboutInfo = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    db.collection("portfolio").onSnapshot((snapshot) =>
      setPortfolios(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="aboutInfo">
      {portfolios.map((portfolio) => (
        <>
          <div className="side2">
            <img src={portfolio.image} alt="" />
          </div>
          <div className="side1">
            <h1>
              {portfolio.title}
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
            <p>{portfolio.description}</p>
          </div>
          <div className="button-group">
            <Link className="linkBtn" to="/">
              Hey
            </Link>
            <Link className="linkBtn" to="/">
              Hey
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
        </>
      ))}
    </div>
  );
};
export default AboutInfo;

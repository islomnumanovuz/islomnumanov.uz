import React, { useEffect, useState } from "react";
import db from "../firebase/config.js";
import { Reveal } from "react-reveal";
import NavbarSection from "../01 Home/Navbar/NavbarSection";
import hand from "../../assets/hand-removebg-preview.png";
import PageInfo from "../03 Portfolio/PageInfo.jsx";
import Footer from "../04 Footer/Footer.jsx";
import LinkIcon from "@material-ui/icons/Link";

const AboutInfo = () => {
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
      <Reveal effect="fadeInUp" duration={1250}>
        <PageInfo className="text-center" />
      </Reveal>
      <div className="about-info container">
        <div className="about-info__image">
          {portfolios.map((portfolio) => (
            <>
              <Reveal effect="fadeInUp" duration="2000">
                <div>
                  <img
                    className="side2__image"
                    src={portfolio.image}
                    alt="images"
                  />
                </div>
              </Reveal>
            </>
          ))}
        </div>
        <Reveal effect="fadeInUp" duration="2000">
          <div className="about-info__text about-me">
            <h4 className="about-me__title">
              Hello my name is Islom
              <span>
                <img width={30} height={30} src={hand} alt="" />
              </span>
            </h4>
            <h2 className="about-me__subtitle">
              I'm Professional web Developer having more than 2+ Years Of
              Experience.
            </h2>
            <p className="about-me__description">
              I'm a Software engineer at{" "}
              <a href="https://codemotion.ninja/">Bayazit</a>. I am passionate
              about building excellent software that improves the lives of those
              around me. I specialize in creating software for clients ranging
              from individuals and small-businesses all the way to large
              enterprise corporations. What would you do if you had a software
              expert available at your fingertips?
            </p>
            <div className="about-me__info">
              <div className="about-me__info--name">
                <span>Full Name</span>
                Ahmadjon Abdusamadov
              </div>
              <div className="about-me__info--age">
                <span>Age</span>
                23
              </div>
              <div className="about-me__info--address">
                <span>Address</span>
                Uzbekistan, Jizzax // city
              </div>
              <div className="about-me__info--phone">
                <span>Phone Number</span>
                +99 897 129 97 77
              </div>
              <div className="about-me__info--email">
                <span>Email</span>
                <a href="mailto:pandadev.uz@gmail.com">pandadev.uz@gmail.com</a>
              </div>
            </div>
            <div className="about-me__buttons btn-group">
              <a href="/" target="_blank" className="btn-default btn">
                <LinkIcon /> CV in uzbek
              </a>
            </div>
          </div>
        </Reveal>
      </div>
      <Footer />
    </>
  );
};
export default AboutInfo;

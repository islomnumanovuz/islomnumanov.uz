import React, { useEffect, useState } from "react";
import PageInfo from "./PageInfo.jsx";
import data from "./data.jsx";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";

import NavbarSection from "../01 Home/Navbar/NavbarSection";
import Reveal from "react-reveal/Reveal";
import Footer from "../04 Footer/Footer.jsx";

export default function Reviews() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <>
      <Reveal effect="animNav" duration="750">
        <NavbarSection />
      </Reveal>
      <Reveal effect="fadeInUp" duration={1250}>
        <PageInfo />
      </Reveal>
      <section className="section">
        <div className="section-center">
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;

            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <article className={position} key={id}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text-quote">{quote}</p>
                <FormatQuoteIcon className="icon" />
              </article>
            );
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <SkipPreviousIcon />
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
            <SkipNextIcon />
          </button>
        </div>
      </section>{" "}
      <Footer />
    </>
  );
}

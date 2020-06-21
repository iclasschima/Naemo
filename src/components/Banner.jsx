import React from "react";
import Banner from "./styles/banner";

export default () => {
  const pathname = window.location.pathname;
  return (
    <Banner>
      <span></span>
      {pathname === "/" ? (
        <Home />
      ) : pathname === "/afriskaut" ? (
        <Afriskaut />
      ) : pathname === "/about" ? (
        <About />
      ) : (
        <Contact />
      )}
    </Banner>
  );
};

const Home = () => (
  <div>
    <h1>For The Love Of The Game</h1>
    <span>
      <i>"Football is life"</i> - Vince Lombardi
    </span>
  </div>
);

const About = () => (
  <div id="about">
    <h1>There Is No I In A Team</h1>
    <span>
      <i>"I have yet to be in a game where luck was involved"</i> - Urban Meyer
    </span>
  </div>
);

const Afriskaut = () => (
  <div id="about">
    <h1>Discovering Talents</h1>
    <span>Keeping tabs on player development through data - No paperwork </span>
  </div>
);

const Contact = () => (
  <div id="contact">
    <h1>Get In Touch</h1>
    <span>Feel free to drop a line </span>
  </div>
);

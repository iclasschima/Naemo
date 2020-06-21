import React from "react";
import market from "../assets/market.svg";
import visualize from "../assets/visualize.svg";
import analysis from "../assets/analysis.svg";
import together from "../assets/together.svg";
import lightbulb from "../assets/lightbulb.svg";
import searching from "../assets/searching.svg";
import questions from "../assets/questions.svg";
import { Row, Col } from "react-bootstrap";
import About from "./styles/about";

export default () => {
  return (
    <About className="container-fluid">
      <Row xs={1}>
        <Col>
          <h5>Who is Naemo?</h5>
          <p>
            We are a start-up software and technology company based in Nigeria.
            With a dynamic team consisting of software developers, user
            interface designers, performance analysts and business developers.
            We are building innovative solutions in the areas of scouting,
            player performance, data gathering and football education.
          </p>
        </Col>
      </Row>

      <h5>What Do We Do?</h5>
      <Row id="do_div" xs={1} md={3}>
        <Col>
          <img src={analysis} alt="strategy" />
          <h6>Digital Strategy</h6>
          <p>
            We provide data-led insights and services for sports professionals
          </p>
        </Col>
        <Col>
          <img src={market} alt="design" />
          <h6>Product Design</h6>
          <p>
            Our applications are intuitive and are built with the latest
            technology
          </p>
        </Col>
        <Col>
          <img src={visualize} alt="analysis" />
          <h6>Player Analysis</h6>
          <p>We provide data driven reports on players.</p>
        </Col>
      </Row>

      <h5>Our Vision</h5>
      <Row xs={1} md={4} id="mission_div">
        <Col>
          <img src={lightbulb} alt="Innovation" />
          <h6>Innovation</h6>
        </Col>
        <Col>
          <img src={searching} alt="Transparency" />
          <h6>Transparency</h6>
        </Col>
        <Col>
          <img src={together} id="together" alt="Teamwork" />
          <h6>Teamwork</h6>
        </Col>
        <Col>
          <img src={questions} id="questions" alt="Problem solving" />
          <h6>Problem Solving</h6>
        </Col>
      </Row>
    </About>
  );
};

import React from "react";
import Footer from "./styles/footer";
import { Container, Row, Col } from "react-bootstrap";

export default () => {
  return (
    <Footer className="container-fluid">
      <Row>
        <Col md={5} className="mb-3">
          <h4>Naemo</h4>
          <p>
            We are building innovative solutions in the areas of scouting,
            player performance, data gathering and football education.
          </p>
        </Col>
        <Col className="d-md-block d-none">
          <h4>Links</h4>
          <ul>
            <li>
              <a href="/"> Home </a>
            </li>
            <li>
              <a href="/"> About Us </a>
            </li>
            <li>
              <a href="/"> Contact </a>
            </li>
            <li>
              <a href="/">Get Demo</a>
            </li>
          </ul>
        </Col>
        <Col className="d-md-block d-none">
          <h4>Follow us</h4>
          <ul>
            <li>
              <a href="/"> Facebook </a>
            </li>
            <li>
              <a href="/"> Twitter </a>
            </li>
            <li>
              <a href="/"> Instagram </a>
            </li>
            <li>
              <a href="/"> LinkedIn </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Container fluid id="bootom_footer">
        <span>
          {" "}
          &copy; Copyright {new Date().getFullYear()} AfriSkaut. All rights
          reserved
        </span>
      </Container>
    </Footer>
  );
};

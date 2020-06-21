import React, { useState } from "react";
import axios from "axios";
import Contact from "./styles/contact";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import { Form, Row, Col, Button } from "react-bootstrap";

export default () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
    mailSent: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, title, message } = state;

    await axios
      .post("/api/contact", {
        name,
        email,
        title,
        message,
      })
      .then((res) => {
        if (res === "successful") {
          alert("Thank you for contacting us.");
          window.location.pathname = "/";
        }
      });
  };

  return (
    <Contact className="container">
      <Row xs={1} md={2}>
        <Col className="d-none d-md-block">
          <h5>Contact Us</h5>
          <ul>
            <li>
              <FiMapPin /> 11, Abayomi street, Lawanson, Lagos, Nigeria
            </li>
            <li>
              <FiMail /> hello@naemo.com{" "}
            </li>
            <li>
              <FiPhone /> +234 802 3237 911, +234 903 1861 100
            </li>
          </ul>
          <div id="social_media_icons">
            <h5>Stay connected</h5>
            <a href="/" id="fb">
              <FaFacebookF />
            </a>
            <a href="/" id="tw">
              <FaTwitter />
            </a>
            <a href="/" id="gram">
              <FaInstagram />
            </a>
            <a href="/" id="in">
              <FaLinkedinIn />
            </a>
          </div>
        </Col>

        <Col>
          <h5>Drop a line now!</h5>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <input type="hidden" name="form-name" value="contact" />
            <Form.Group>
              <Form.Control
                name="name"
                type="text"
                placeholder="Name"
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                name="email"
                type="email"
                placeholder="Email"
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                name="title"
                type="text"
                placeholder="Subject"
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                name="message"
                as="textarea"
                placeholder="Message"
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Button type="submit">Send Message</Button>
          </Form>
        </Col>

        <Col className="d-md-none d-block mt-5">
          <h5>Contact Us</h5>
          <ul>
            <li>
              <FiMapPin /> 11, Abayomi street, Lawanson, Lagos, Nigeria
            </li>
            <li>
              <FiMail /> hello@naemo.com
            </li>
            <li>
              <FiPhone /> +234 802 3237 911, +234 903 1861 100
            </li>
          </ul>
          <div id="social_media_icons">
            <h5>Stay connected</h5>
            <a href="/" id="fb">
              <FaFacebookF />
            </a>
            <a href="/" id="tw">
              <FaTwitter />
            </a>
            <a href="/" id="gram">
              <FaInstagram />
            </a>
            <a href="/" id="in">
              <FaLinkedinIn />
            </a>
          </div>
        </Col>
      </Row>
    </Contact>
  );
};

import React from "react";
import axios from "axios";
import Benefits from "./styles/afriskaut";
import { FiDatabase } from "react-icons/fi";
import { BsBarChart } from "react-icons/bs";
import { RiFootprintLine } from "react-icons/ri";
import { Row, Col, Form, Button } from "react-bootstrap";

export default () => {
  const handleSubmit = async () => {
    const res = await axios.post(
      "https://app.us18.list-manage.com/subscribe/post?u=25c112b03c33ce78370e087f5&amp;id=026c5d2e81"
    );

    alert("Done");

    console.log(res);
  };

  return (
    <Benefits className="container-fluid">
      <Row md={2} xs={1}>
        <Col id="features">
          <div>
            <h6>
              <FiDatabase /> Huge Database
            </h6>
            <p>
              Gain access to our database consisting thousands of African
              players
            </p>
          </div>
          <div>
            <h6>
              <RiFootprintLine /> Track development{" "}
            </h6>
            <p>Receive detailed reports on players development</p>
          </div>
          <div>
            <h6>
              <BsBarChart />
              Data Analysis Using Models
            </h6>
            <p>
              Drawing comparisons between players and finding out areas in need
              of improvement
            </p>
          </div>
        </Col>

        <Col md={5}>
          <h6>Request Free Afriskaut Demo App</h6>
          <Form
            onSubmit={handleSubmit}
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            novalidate
          >
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="FNAME"
                id="mce-FNAME"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="LNAME"
                id="mce-LNAME"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Email"
                name="EMAIL"
                id="mce-EMAIL"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="select"
                name="MMERGE3"
                className="required"
                id="mce-MMERGE3"
              >
                <option value="Fan">Fan</option>
                <option value="Scout">Scout</option>
              </Form.Control>
            </Form.Group>

            <Button type="submit">Request Demo</Button>
          </Form>
        </Col>
      </Row>
    </Benefits>
  );
};

import React from "react"
import Benefits from "./styles/afriskaut"
import {FiDatabase} from "react-icons/fi"
import {BsBarChart} from "react-icons/bs"
import {RiFootprintLine} from "react-icons/ri"
import {Row, Col, Form, Button} from "react-bootstrap"

export default () => {

    return (
        <Benefits className="container-fluid">
            <Row md={2} xs={1}>
                <Col id="features">
                    <div>
                        <h6><FiDatabase /> Huge Database</h6>
                        <p>Gain access to our database consisting thousands of African players and teams</p>
                    </div>
                    <div>
                        <h6><RiFootprintLine /> Track development </h6>
                        <p>Receive detailed reports on players development</p>
                    </div>
                    <div>
                        <h6><BsBarChart />Data Analysis Using Models</h6>
                        <p>Drawing comparisons between players and finding out areas in need of improvement</p>
                    </div>
                </Col>
                
                <Col md={5}>
                    <h6>Request Free Demo</h6>
                    <Form>
                        <Form.Group>
                            <Form.Control type="text" placeholder="First Name"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Last Name"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                            <Form.Group>
                            <Form.Control as="select">
                                <option>Select role</option>
                                <option>Fan</option>
                                <option>Scout</option>
                            </Form.Control>
                        </Form.Group>

                        <Button type="submit">Request Demo</Button>
                    </Form>
                </Col>
            </Row>
        </Benefits>
    )
}
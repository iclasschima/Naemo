import React from "react"
import Contact from "./styles/contact"
import {FiMapPin, FiMail, FiPhone} from "react-icons/fi"
import {FaInstagram,FaLinkedinIn, FaFacebookF, FaTwitter} from "react-icons/fa"
import {Form, Row, Col, Button} from "react-bootstrap"

export default () => {

    return (
        <Contact className="container">
            <Row xs={1} md={2}>
                <Col className="d-none d-md-block">
                    <h5>Contact Us</h5>
                    <ul>
                        <li><FiMapPin /> 11, Abayomi street, Lawanson, Lagos, Nigeria</li>
                        <li><FiMail /> hello@naemo.com </li>
                        <li><FiPhone /> +234 802 3237 911, +234 903 1861 100</li>
                    </ul>
                    <div id="social_media_icons">
                        <h5>Stay connected</h5>
                        <a href="/" id="fb"><FaFacebookF/></a>
                        <a href="/" id="tw"><FaTwitter /></a>
                        <a href="/" id="gram"><FaInstagram /></a>
                        <a href="/" id="in"><FaLinkedinIn /></a>             
                    </div>
                </Col>
               
               
                <Col>
                    <h5>Drop a line now!</h5>
                    <Form>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Name"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Subject" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="textarea" placeholder="Message" />
                        </Form.Group>
                        <Button type="submit">Send Message</Button>
                    </Form>
                </Col>

                <Col className="d-md-none d-block mt-5">
                    <h5>Contact Us</h5>
                    <ul>
                        <li><FiMapPin /> 11, Abayomi street, Lawanson, Lagos, Nigeria</li>
                        <li><FiMail /> hello@naemo.com </li>
                        <li><FiPhone /> +234 802 3237 911, +234 903 1861 100</li>
                    </ul>
                    <div id="social_media_icons">
                        <h5>Stay connected</h5>
                        <a href="/" id="fb"><FaFacebookF/></a>
                        <a href="/" id="tw"><FaTwitter /></a>
                        <a href="/" id="gram"><FaInstagram /></a>
                        <a href="/" id="in"><FaLinkedinIn /></a>             
                    </div>
                </Col>
            </Row>
               
        </Contact>
    )
}
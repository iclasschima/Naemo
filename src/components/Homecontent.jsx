import React from "react"
import {Row, Col} from "react-bootstrap"
import image from "../assets/apppic.png"
import image2 from "../assets/apppic2.png"
import Content from "./styles/content"

export default () => (
    <Content className="container-fluid">
        <h5>Naemo is a technology driven company providing innovative solutions in African football.</h5>
        <Row>
            <Col md={7} id="image_div">
                <img src={image2} alt="app_image"/>
                <img src={image} alt="app_image"/>
            </Col>
            <Col id="text_div">
                <h6>AfriSkaut</h6>
                <p>	
                    A mobile solution for national teams, scouts and fans to easily gain access to data and	
                    insights on African players	around the	world. Afriskaut helps in the assessment and recruitment	
                    decisions of those in need of African talent. A leading provider of data driven insights on African
                    footballers	around the world.
                </p>
                <a href="/afriskaut" className="btn">Read More</a>
            </Col>
        </Row>
    </Content>
)
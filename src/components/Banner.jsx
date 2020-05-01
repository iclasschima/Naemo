import React from "react"
import Banner from "./styles/banner"

export default () => {
    const pathname = window.location.pathname   
    return (
        <Banner>
            <span></span>
            {pathname === "/" ? <Home /> : pathname === "/about" ?  <About /> : <Contact />}
        </Banner>
    )
}

const Home = () => (
    <div>
        <h1>The Ultimate Scout</h1>
        <span>Analyzing data to help make informed decisions</span>
    </div>
)

const About = () => (
    <div id="about">
    <h1>Discovering Talents</h1>
    <span>Keeping tabs on player development through data - No paperwork </span>
    </div>
)

const Contact = () => (
    <div id="contact">
    <h1>Get In Touch</h1>
    <span>Feel free to drop a line </span>
    </div>
)

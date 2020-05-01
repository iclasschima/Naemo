import React, {useEffect} from "react"
import {FiX} from "react-icons/fi"
import Mobile from "./styles/mobileNav"
import {gsap} from "gsap"

export default ({changeState}) => {

    useEffect(() => {
        gsap.to("#mobile", 0.1, {right: "0%"})
    }, [])

    const handleClick = () => {
        gsap.to("#mobile", .1, {right: "-100%"})
        setTimeout(() => {
            changeState()
        }, 1000)
    }

    return (
        <Mobile id="mobile">
            <span onClick={handleClick}><FiX /></span>
            <div>
                <a href="/" className="px-md-4"> Home </a>
                <a href="/about" className="px-md-4"> About Us </a>
                <a href="/contact" className="px-md-4"> Contact </a>
                <a href="/afriskaut" className="px-md-4"> Get Demo</a>
            </div>
        </Mobile>
    )
}
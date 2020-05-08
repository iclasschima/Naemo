import styled from "styled-components"
import banner1 from "../../assets/soccer-africa.jpg"
import banner2 from "../../assets/jump.jpg"
import banner4 from "../../assets/remarkables.jpg"
import banner3 from "../../assets/sky-sunset-field.jpg";

const pathname = window.location.pathname
let img = pathname === "/" ? banner1 : pathname === "/afriskaut" ? banner2 : pathname === "/" ? banner1 : pathname === "/about" ? banner4 : banner3

export default styled.div`
    background: url(${img}) center;
    background-size: cover;
    height: 550px;
    position: relative;
    overflow: hidden;

    @media (max-width: 480px) {
        height: 350px !important;

        h1{
            font-size: 30px !important;
            line-height: 46px;
        }

        span {
            font-size: 18px !important;
        }
    }

    span:first-child {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #24323d;
        opacity: 0.40;
    }

    div {
        opacity: 1;
        position: absolute;
        width: 100%;
        top: 20%;
        padding-left: 13%;
        h1{
            font-weight: 500;
            color: #fff;
            font-size: 50px;
        }
        span {
            color: #e0e0de;
            font-size: 20px;
            width: 10% !important;
        }
    }

    #contact {
        top: 33%;
        left: 25% !important;
    }

    #about {
        top: 23%;
        left: 17%;
    }
    @media screen and (max-width: ${props => props.theme.device.mobile}) {
        #contact {
            top: 30%;
            left: 3% !important;
        }

        #about {
            top: 23%;
            left: -5%;
        }
    }

`
import styled from "styled-components"

export default styled.div`
    position: fixed;
    height: 100vh;
    width: 100%;
    bottom: 0;
    top: 0;
    right: -100%;
    overflow-y: auto;
    background-color: #fff;
    z-index: 1030;
    transition: ease 0.5s;

    span {
        color: ${props => props.theme.color.secondary};
        font-size: 30px !important;
        position: absolute;
        right: 6%;
        top: 2%;
    }

    div {
        position: absolute;
        top: 30%;
        text-align: center;
        width: 100%;
        padding: 0 30px;
        a {
            color: ${props => props.theme.color.secondary};
            margin: 0 auto;
            display: block;
            line-height: 60px;
            border-bottom: 1px solid ${props => props.theme.color.secondary};
            font-weight: 500;
            letter-spacing: 0.4px;
            &:first-child
             {
                border-top: 1px solid ${props => props.theme.color.secondary}
             }
        }
    }

`
import styled from "styled-components"

export default styled.div`
    padding: 1rem 4rem 0;
    font-size: ${props => props.theme.fontSize.bg};

    h5 {
        font-weight: 500;
        font-size: ${props => props.theme.fontSize.header};
        margin-bottom: 5rem;
    }
    h6 {
        font-size: ${props => props.theme.fontSize.header}
    }
    #image_div {
        padding: 10px;
        img {
            width: 45%;
            margin: 0 0.3rem
        }
    }
    #text_div {
        padding-top: 30px;
        .btn {
            width: 60%;
            margin-top: 20px;
            background-color: #fff;
            color: ${props => props.theme.color.primary};
            border-color: ${props => props.theme.color.primary};
            &:hover {
                background-color: ${props => props.theme.color.secondary};
                color: #fff;
                border-color: ${props => props.theme.color.secondary};
            }
        }
    }

    @media screen and (max-width: ${props => props.theme.device.mobile}) {
        padding: 1rem 1em 4rem;
        font-size: ${props => props.theme.fontSize.md};
    }
    
`
import styled from "styled-components"

export default styled.div`
    color: ${props => props.theme.color.secondary};
    padding: 0 4%;
    font-size: ${props => props.theme.fontSize.md};
    h6 {
        font-size: ${props => props.theme.fontSize.bg};
        svg {
            margin-right: 0.3rem;
            font-size: 1.4rem
        }
    }
    #features {
        padding: 1rem 2rem;
        div {
            margin-bottom: 3rem;
        }
    }

    form {
        margin-top: 1rem;
    }

    button {
        margin-top: 20px;
        background-color: ${props => props.theme.color.secondary};
        color: #fff;
        border-color: #484848;
        &:hover {
            background-color: ${props => props.theme.color.secondary};
            color: #fff;
        }
    }
    @media screen and (max-width: ${props => props.theme.device.mobile}){
        padding: 3rem 1.4rem;
        .col {
            padding: 0 1rem;
        }
        #features {
            padding: 0 1rem;
            margin-bottom: 2rem;
        }
    }
`
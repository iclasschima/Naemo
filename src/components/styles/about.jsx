import styled from "styled-components"

export default styled.div`
    h5 {
        font-size: ${props => props.theme.fontSize.header};
        line-height: 6rem;
        text-align: center; 
    }

    h6 {
        padding-top: 2em;
        font-size: ${props => props.theme.fontSize.bg}; 
    }

    .row {
        margin-bottom: 5rem
    }

    p {
        font-size: ${props => props.theme.fontSize.md}
    }
    div {
        margin: 0 auto;
        width: 70%;
       
    }

    #do_div {
        .col {
            text-align: center;
            img {
                width: 40%;
            }
           
        }
    }

    #mission_div {
        .col {
            text-align: center;
            margin: 0;
            img {
                width: 40%;
                height: 100%;
                &#together {
                    width: 70%
                }
                &#questions {
                    width: 50%;
                }
            }
           
       }
    }

    @media screen and (max-width: ${props => props.theme.device.mobile}){
        padding: 0 !important;
        div {
            width: 100% !important;
            .col {
                margin-bottom: 4rem;
            }
        }

        .row {
            margin-bottom: 1rem
        }

        #mission_div {
            .col {
                text-align: center;
                margin-bottom: 3rem;
                img {
                    width: 40%;
                    height: 60%;
                    &#questions {
                        width: 40%;
                    }
                }
                h6 {
                    margin-bottom: 0;
                }
            }
        }
    }
`
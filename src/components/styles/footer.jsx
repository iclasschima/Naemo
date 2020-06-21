import styled from "styled-components";

export default styled.div`
  border-top: 1px solid #d4d7dc;
  padding: 3rem 4rem 0;
  font-size: ${(props) => props.theme.fontSize.md};
  position: absolute;

  @media screen and (max-width: 760px) {
    padding: 40px 30px 0px;
  }

  h4 {
    font-size: ${(props) => props.theme.fontSize.md};
    color: ${(props) => props.theme.color.secondary};
  }

  ul {
    list-style-type: none;
    a {
      text-decoration: none;
      color: ${(props) => props.theme.color.secondary};
      line-height: 33px !important;
      &:hover {
        color: #4c4c4c;
        text-decoration: underline;
      }
    }
  }
  #bootom_footer {
    margin-top: 5%;
    border-top: 1px solid #d4d7dc;
    padding-top: 20px;
    padding-bottom: 20px;
    span {
      line-height: 18px;
    }
    svg {
      border-color: white;
    }
  }
  @media screen and (max-width: ${(props) => props.theme.device.mobile}) {
    ul {
      margin-bottom: 25px;
    }
    #bootom_footer {
      margin-top: 0rem;
    }

    padding: 3rem 1rem 0;
  }
`;

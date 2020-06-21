import styled from "styled-components";

export default styled.div`
  h5 {
    line-height: 48px;
    font-size: ${(props) => props.theme.fontSize.bg};
  }

  input,
  button {
    font-size: ${(props) => props.theme.fontSize.md} !important;
    margin: 20px 0;
  }

  button {
    margin-top: 20px;
    background-color: ${(props) => props.theme.color.secondary};
    color: #fff;
    border-color: #484848;
    &:hover {
      background-color: ${(props) => props.theme.color.secondary};
      color: #fff;
    }
  }

  ul {
    list-style-type: none;
    li {
      margin-bottom: 20px;
      line-height: 30px;
      font-size: ${(props) => props.theme.fontSize.md};
    }
  }
  svg {
    font-size: 20px;
    margin-right: 1rem;
  }

  #social_media_icons {
    margin-top: 2rem;
    a {
      display: inline-block;
      width: 40px;
      margin: 10px;
      overflow: hidden;
      &#fb {
        color: #3b5998;
      }
      &#tw {
        color: #00acee;
      }
      &#gram {
        color: #3f729b;
      }
      &#in {
        color: #0e76a8;
      }
      svg {
        width: 100%;
        line-height: 40px;
        font-size: 16px;
        transition: 0.2s linear;
        &:hover {
          transform: scale(1.5);
        }
      }
    }
  }

  @media screen and (max-width: ${(props) => props.theme.device.mobile}) {
    padding: 0 2em;
  }
`;

import styled from "styled-components";

export default styled.div`
  h5 {
    font-size: ${(props) => props.theme.fontSize.header};
  }

  img {
    width: 50%;
    margin-top: 2%;
  }

  @media screen and (max-width: ${(props) => props.theme.device.mobile}) {
    padding: 8rem 1rem;
  }
`;

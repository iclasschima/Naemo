import styled from "styled-components";

export default styled.div`
  position: sticky !important;
  top: 0 !important;
  z-index: 1024 !important;
  border-bottom: 1px solid #d4d7dc;
  background-color: #fff;

  span {
    font-size: 23px;
    padding-right: 10px;
  }
  .navbar-brand {
    font-size: ${(props) => props.theme.fontSize.header};
  }

  .navbar-nav {
    a {
      font-size: ${(props) => props.theme.fontSize.md};
    }
  }
`;

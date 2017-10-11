import styled, { injectGlobal } from "styled-components";

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    background-color: #f1f1f1;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p {
    font-family: Helvetica;
    margin: 0 0 0.5rem 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Helvetica;
    margin: 0 0 10px 0;
    padding: 0;
  }

  * {
    position: relative;
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
  }
`;

export const H1 = styled.h1``;
export const H2 = styled.h2``;
export const H3 = styled.h3``;
export const H4 = styled.h4``;
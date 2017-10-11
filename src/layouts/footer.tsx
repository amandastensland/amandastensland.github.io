import React from "react";
import styled from "styled-components";

/**
 * Styled
 */
export const Root = styled.section`
  background-color: gray;
  text-align: center;
  padding: 3rem 0;
  color: white;
`;

/**
 * Component
 */
export const Footer = () => (
  <Root>
    © 2017 Amanda Stensland. All Rights Reserved.
  </Root>
);
import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";

export const Root = styled.header`
  background-color: gray;
  padding: 10px;
`;

export const Logo = styled.h1`
  color: white;
`;

export const Link = styled(ReactLink)`
  color: white;
`;
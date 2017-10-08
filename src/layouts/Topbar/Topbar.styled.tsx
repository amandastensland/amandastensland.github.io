import styled from "styled-components";
import { Link } from "react-router-dom";

export const Root = styled.header`
  background-color: gray;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.h1`
  color: white;
  margin: 0;
  &:hover { cursor: pointer; }
`;

export const Space = styled.div`
  flex-grow: 1;
`;

export const TopbarLink = styled(Link)`
  padding: 0rem 0rem 0rem 1rem;
  color: white;
  text-decoration: none;
  &:last-child { padding-right: 0; }
`;
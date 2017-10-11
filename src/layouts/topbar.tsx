import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/**
 * Types
 */
export interface ITopbar {
  title: string;
}

/**
 * Styled
 */
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

/**
 * Component
 */
export class Topbar extends React.Component<ITopbar> {
  render() { 
    return (
      <Root>
        <Logo><Link to="/">{this.props.title}</Link></Logo>
        <Space />
        <TopbarLink to="/">Startsida</TopbarLink>
        {/* <TopbarLink to="/about">Om mig</TopbarLink> */}
      </Root>
    );
  }
}
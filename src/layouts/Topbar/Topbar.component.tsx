import React from "react";
import { Logo, Root, TopbarLink, Space } from "./topbar.styled";
import { ITopbar } from "./topbar.interface";
import { Link } from "react-router-dom";

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
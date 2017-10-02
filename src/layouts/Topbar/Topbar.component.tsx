import React from "react";
import { Logo, Root, Link } from "./Topbar.styled";

export const Topbar = () => (
  <Root>
    <Logo>Topbar</Logo>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </Root>
);
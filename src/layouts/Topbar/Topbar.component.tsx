import React from "react";
import { Logo, Root, Link } from "./topbar.styled";

export const Topbar = () => (
  <Root>
    <Logo>Amanda Stensland</Logo>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </Root>
);
import React from "react";
import { Link } from "react-router-dom";
import { Logo, Root } from "./Topbar.styled";

export const Topbar = () => (
  <Root>
    <Logo>Topbar</Logo>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </Root>
);
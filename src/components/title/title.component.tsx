import React from "react";
import { ITitle } from "./title.interface";
import { Root } from "./title.styled";

export const Title = ({ title }: ITitle ) => (
  <Root>{title}</Root>
);
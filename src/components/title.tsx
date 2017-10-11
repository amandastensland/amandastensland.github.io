import React from "react";
import styled from "styled-components";

/**
 * Types
 */
export interface ITitle {
  title: string;
}

/**
 * Styled
 */
export const Root = styled.h3``;

/**
 * Component
 */
export const Title = ({ title }: ITitle ) => (
  <Root>{title}</Root>
);
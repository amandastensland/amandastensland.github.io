import React from "react";
import styled from "styled-components";

/**
 * Types
 */
export interface IImage {
  id: string;
  itemType: string;
  updatedAt: string;
  image: { url: string};
}

/**
 * Styled
 */
export const Img = styled.img``;

/**
 * Component
 */
export class Image extends React.Component<IImage> {
  render() {
    return <img src={this.props.image.url} />
  }
}
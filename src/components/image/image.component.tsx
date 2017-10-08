import React from "react";
import { IImage } from "./image.interface";
import { Img } from "./image.styled";

export class Image extends React.Component<IImage> {
  render() {
    return <img src={this.props.image.url} />
  }
}
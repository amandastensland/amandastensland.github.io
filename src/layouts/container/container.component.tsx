import React from "react";
import { Root } from "./container.styled";

export class Container extends React.Component {
  render() {    
    return (
      <Root>
        {this.props.children}
      </Root>
    );
  }
}
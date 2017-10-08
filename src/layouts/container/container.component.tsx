import React from "react";
import { Root } from "./container.styled";
import Helmet from "react-helmet";

export class Container extends React.Component {
  render() {    
    return (
      <Root>
        <Helmet>
          <html lang="sv" />
        </Helmet>
        {this.props.children}
      </Root>
    );
  }
}
import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

/**
 * Styled
 */
export const Root = styled.div`
`;

/**
 * Component
 */
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
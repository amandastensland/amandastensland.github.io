import React from "react";
import styled from "styled-components";
import { IBlock, Block } from "../components/block";

const about = require("json-loader!yaml-loader!../content/about.yml");

/**
 * Types
 */
export interface IAbout {
  id: string;
  itemType: string;
  content: IBlock[];
}

/**
 * Styled
 */
export const Root = styled.main`
  margin: 2rem auto;
  max-width: 50rem;
  background-color: white;
  padding: 1rem;
`;

export class About extends React.Component<IAbout> {
  static defaultProps = {
    content: about.content
  };

  render() {
    return (
      <Root>
        {this.props.content.map( (block: IBlock) => 
          <Block {...block} key={block.id} />)}
      </Root>
    );
  }
}
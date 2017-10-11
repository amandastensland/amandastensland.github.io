import React from "react";
import moment from "moment";
import styled from "styled-components";
import { IBlock, Block } from "./block";

/**
 * Types
 */
export interface IBlogPost {
  id: string;
  itemType: string;
  updatedAt: string;
  title: string;
  content: IBlock[];
};

/**
 * Styled
 */
export const Root = styled.section`
  margin: 0 0 1rem 0;
  background-color: white;
  padding: 1rem;
  &:last-child { margin: 0; }
`;
export const Title = styled.h2``;
export const Timestamp = styled.h3``;

/**
 * Component
 */
export class BlogPost extends React.Component<IBlogPost> {
  render() {
    moment.locale('sv');
    return (
      <Root>
        <Title>{this.props.title}</Title>
        <Timestamp>{moment(this.props.updatedAt).format("LLL")}</Timestamp>
        { this.props.content.map( (block: IBlock) => 
          <Block {...block} key={block.id} />) }
      </Root>
    );
  }
}
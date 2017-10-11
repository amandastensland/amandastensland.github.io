import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { H3 } from "../theme";

/**
 * Types
 */
export interface IArticle {
  title: string;
  url: string;
  content: string;
}

/**
 * Styled
 */
export const Root = styled.div``;
export const Title = styled(H3)``;
export const Url = styled.a`
  margin: 0 0 1rem 0;
  color: blue;
  text-decoration: underline;
`;

/**
 * Component
 */
export class Article extends React.Component<IArticle> {
  render() {
    return (
      <Root>
        <Title>{this.props.title}</Title>
        <Url href={this.props.url}>{this.props.url}</Url>
        <ReactMarkdown source={this.props.content} />
      </Root>
    );
  }
}
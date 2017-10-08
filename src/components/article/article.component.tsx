import React from "react";
import { IArticle } from "./article.interface";
import { Root, Title, Url } from "./article.styled";
import ReactMarkdown from "react-markdown";

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
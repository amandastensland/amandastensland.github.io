import React from "react";
import { IBlogPost } from "./blog-post.interface";
import { Root, Title, Timestamp } from "./blog-post.styled";
import { Video } from "../video/video.component";
import { Text } from "../text/text.component";
import { Block } from "../block/block.component";
import { IBlock } from "../block/block.interface";
import moment from "moment";

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
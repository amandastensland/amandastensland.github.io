import React from "react";
import { Video, IVideo } from "./video";
import { Article, IArticle } from "./article";
import { Title, ITitle } from "./title";
import { Text, IText } from "./text";
import { Image, IImage } from "./image";

/**
 * Types
 */
export interface IBlock {
  id: string;
  updatedAt: string;
  title: string;
  itemType: string;
  image?: { url: string };
  url?: string;
  content?: string;
}

/**
 * Component
 */
export class Block extends React.Component<IBlock> {
  render() {
    switch(this.props.itemType) {
      case "video_block": 
        return <Video {...(this.props as IVideo)} key={this.props.id} />;
      case "text_block": 
        return <Text {...(this.props as IText) } key={this.props.id} />;
      case "image_block": 
        return <Image {...(this.props as IImage) } key={this.props.id} />;
      case "title_block": 
        return <Title {...(this.props as ITitle) } key={this.props.id} />;
      case "article_block": 
        return <Article {...(this.props as IArticle) } key={this.props.id} />;
      default: return null;
    }
  }
}
import React from "react";
import { Video } from "../video/video.component";
import { Text } from "../text/text.component";
import { IBlock } from "./block.interface";
import { IVideo } from "../video/video.interface";
import { IText } from "../text/text.interface";
import { IImage } from "../image/image.interface";
import { Image } from "../image/image.component";
import { Title } from "../title/title.component";
import { ITitle } from "../title/title.interface";
import { Article } from "../article/article.component";
import { IArticle } from "../article/article.interface";

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
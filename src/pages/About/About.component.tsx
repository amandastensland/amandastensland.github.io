import React from "react";
import { IAbout } from "./about.interface";
import { Root } from "./about.styled";
import { Block } from "../../components/block/block.component";
import { IBlock } from "../../components/block/block.interface";

const about = require("json-loader!yaml-loader!../../content/about.yml");

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
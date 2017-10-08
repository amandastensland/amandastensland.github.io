import React from "react";
import { IAbout } from "./about.interface";
import { Root } from "./about.styled";
import { ISection } from "../../components/section/section.interface";
import { Section } from "../../components/section/section.component";

const about = require("json-loader!yaml-loader!../../content/about.yml");

export class About extends React.Component<IAbout> {
  static defaultProps = {
    sections: about.sections
  };

  render() {
    return (
      <Root>
        {this.props.sections.map( (section: ISection) => <Section {...section} key={section.id} /> )}
      </Root>
    );
  }
}
import React from "react";
import { Section } from "../../components/section/section.component";
import { ISection } from "../../components/section/section.interface";
import { Root } from "./home.styled";
import { IHome } from "./home.interface";

const index = require("json-loader!yaml-loader!../../content/index.yml");

export class Home extends React.Component<IHome> {
  static defaultProps = {
    sections: index.sections
  };

  render() {
    return (
      <Root>
        {this.props.sections.map( (section: ISection) => <Section {...section} key={section.id} /> )}
      </Root>
    );
  }
}
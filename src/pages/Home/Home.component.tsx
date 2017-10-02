import React from "react";
import styled from "styled-components";
import { Section } from "../../components/Section/Section.component";
import { ISection } from "../../components/Section/Section.interface";
import { Root } from "./Home.styled";
const index = require("json-loader!yaml-loader!../../content/index.yml");

export class Home extends React.Component {
  render() {
    const sections: ISection[] = index.sections;
    return (
      <Root>
        {sections.map( section => <Section {...section} key={section.id} /> )}
      </Root>
    );
  }
}
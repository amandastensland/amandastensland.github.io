import React from "react";
import { Root, Title, SectionTitle, SubsectionTitle } from "./Sidebar.styled";
import { ISection } from "../../components/Section/Section.interface";
import { ISubsection } from "../../components/Subsection/Subsection.interface";

export const Sidebar = () => (
  <Root>
    <Title>Sidebar</Title>
    {/* sections.map((section :SectionInterface, i: number) =>
      <SectionTitle>{section.title}</SectionTitle>
      {section.subsections.map((subsection: SubsectionInterface, i: number) =>
        <SubsectionTitle>{subsection.title}</SubsectionTitle>
      )}
    ) */}
  </Root>
);
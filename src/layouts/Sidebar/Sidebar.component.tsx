import React from "react";
import { Root, Title, SectionTitle, SubsectionTitle } from "./sidebar.styled";
import { ISection } from "../../components/section/section.interface";
import { ISubsection } from "../../components/subsection/subsection.interface";

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
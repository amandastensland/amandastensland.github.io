import React from "react";
import { Root, Title, SectionTitle, SubsectionTitle } from "./sidebar.styled";

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
import React from "react";
import styled from "styled-components";

/**
 * Styled
 */
export const Root = styled.aside``;
export const Title = styled.h2``;
export const SectionTitle = styled.h3``;
export const SubsectionTitle = styled.h3``;

/**
 * Component
 */
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
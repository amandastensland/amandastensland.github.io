import React from "react";
import { SectionInterface } from "./Section.interface";
import { Root, Title } from "./Section.styled";
import { SubsectionVideo } from "../SubsectionVideo/SubsectionVideo.component";
import { SubsectionText } from "../SubsectionText/SubsectionText.component";
import { SubsectionInterface } from "../Subsection/Subsection.interface";
import { SubsectionVideoInterface } from "../SubsectionVideo/SubsectionVideo.interface";
import { SubsectionTextInterface } from "../SubsectionText/SubsectionText.interface";

export const Section = ({ title, subsections }: SectionInterface ) => (
  <Root>
    <Title>{title}</Title>
    {subsections.map( (item: SubsectionInterface, i) => {
      switch(item.itemType) {
        case "subsection_video": return <SubsectionVideo {...(item as SubsectionVideoInterface)} key={i} />;
        case "subsection_text": return <SubsectionText {...(item as SubsectionTextInterface)} key={i} />;
        default: return null;
      }
    })}
  </Root>
);
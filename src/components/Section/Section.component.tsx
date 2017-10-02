import React from "react";
import { ISection } from "./Section.interface";
import { Root, Title } from "./Section.styled";
import { SubsectionVideo } from "../SubsectionVideo/SubsectionVideo.component";
import { SubsectionText } from "../SubsectionText/SubsectionText.component";
import { ISubsection } from "../Subsection/Subsection.interface";
import { ISubsectionVideo } from "../SubsectionVideo/SubsectionVideo.interface";
import { ISubsectionText } from "../SubsectionText/SubsectionText.interface";

export const Section = ({ title, subsections }: ISection ) => (
  <Root>
    <Title>{title}</Title>
    {subsections.map( (item: ISubsection, i) => {
      switch(item.itemType) {
        case "subsection_video": return <SubsectionVideo {...(item as ISubsectionVideo)} key={i} />;
        case "subsection_text": return <SubsectionText {...(item as ISubsectionText)} key={i} />;
        default: return null;
      }
    })}
  </Root>
);
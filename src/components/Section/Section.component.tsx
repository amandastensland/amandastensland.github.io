import React from "react";
import { ISection } from "./section.interface";
import { Root, Title } from "./section.styled";
import { Video } from "../video/video.component";
import { Text } from "../text/text.component";
import { ISubsection } from "../subsection/subsection.interface";
import { IVideo } from "../video/video.interface";
import { IText } from "../text/text.interface";

export const Section = ({ title, subsections }: ISection ) => (
  <Root>
    <Title>{title}</Title>
    {subsections.map( (item: ISubsection, i) => {
      switch(item.itemType) {
        case "video": return <Video {...(item as IVideo)} key={item.id} />;
        case "text": return <Text {...(item as IText)} key={item.id} />;
        default: return null;
      }
    })}
  </Root>
);
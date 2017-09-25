import React from "react";
import { SubsectionTextInterface } from "./SubsectionText.interface";
import { Root, Title, Subtitle, Text } from "./SubsectionText.styled";

export const SubsectionText = ({ 
  title, 
  content 
}: SubsectionTextInterface ) => (
  <Root>
    <Title>{title}</Title>
    {content.map((item, i) => {
      switch(item.itemType) {
        case "type_text": return <Text key={i}>{item.title}</Text>;
        case "type_title": return <Subtitle key={i}>{item.title}</Subtitle>;
        default: return null;
      }
    })}
  </Root>
);
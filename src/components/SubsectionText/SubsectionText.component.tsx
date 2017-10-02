import React from "react";
import { ISubsectionText } from "./SubsectionText.interface";
import { Root, Title, Subtitle, Text } from "./SubsectionText.styled";
import ReactMarkdown from "react-markdown";

export const SubsectionText = ({ title, content }: ISubsectionText ) => (
  <Root>
    <Title>{title}</Title>
    <ReactMarkdown source={content} />
  </Root>
);
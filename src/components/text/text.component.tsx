import React from "react";
import { IText } from "./text.interface";
import { Root, Title, Subtitle, P } from "./text.styled";
import ReactMarkdown from "react-markdown";

export const Text = ({ title, content }: IText ) => (
  <Root>
    <ReactMarkdown source={content} />
  </Root>
);
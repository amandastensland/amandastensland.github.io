import React from "react";
import { IVideo } from "./video.interface";
import { Subtitle, Description, Iframe, Root } from "./video.styled";

export const Video = ({ 
  title, 
  content, 
  video }: IVideo ) => (
  <Root>
    <Description>{content}</Description>
    <Iframe 
      src={video.url} 
      frameBorder="0" 
      allowFullScreen />
  </Root>
);
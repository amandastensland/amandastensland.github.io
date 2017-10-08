import React from "react";
import { IVideo } from "./video.interface";
import { Subtitle, Description, Iframe } from "./video.styled";
import { Subsection } from "../Subsection/Subsection.styled";

export const Video = ({ 
  title, 
  description, 
  video }: IVideo ) => (
  <Subsection>
    <Subtitle>{title}</Subtitle>
    <Description>{description}</Description>
    <iframe 
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/ScMzIvxBSi4" 
      frameBorder="0" 
      allowFullScreen>
    </iframe>
  </Subsection>
);
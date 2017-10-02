import React from "react";
import { ISubsectionVideo } from "./SubsectionVideo.interface";
import { Subtitle, Description, Video } from "./SubsectionVideo.styled";
import { Subsection } from "../Subsection/Subsection.styled";

export const SubsectionVideo = ({ 
  title, 
  description, 
  video }: ISubsectionVideo ) => (
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
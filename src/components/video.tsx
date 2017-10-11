import React from "react";
import styled from "styled-components";

/**
 * Types
 */
export interface IVideo {
  id: string;
  title: string;
  updatedAt: string;
  itemType: string
  content: string;
  video: { url: string };
}

/**
 * Styled
 */
export const Root = styled.div``;
export const Subtitle = styled.h3``;
export const Description = styled.p``;
export const Iframe = styled.iframe`
  width: 100%;
  height: 400px;
`;

/**
 * Component
 */
export const Video = ({ title, content, video }: IVideo ) => (
  <Root>
    <Description>{content}</Description>
    <Iframe 
      src={video.url} 
      frameBorder="0" 
      allowFullScreen />
  </Root>
);
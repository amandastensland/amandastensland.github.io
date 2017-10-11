import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

/**
 * Types
 */
export interface IText {
  id: string;
  title: string;
  updatedAt: string;
  itemType: string;
  content: string;
}

/**
 * Component
 */
export const Text = ({ title, content }: IText ) => (
  <ReactMarkdown source={content} />
);
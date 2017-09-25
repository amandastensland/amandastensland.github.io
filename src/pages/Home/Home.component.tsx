import React from "react";
import styled from "styled-components";
import { sections } from "./Home.data";
import { Section } from "../../components/Section/Section.component";

export const Home = () => (
  <main>
    {sections.map( (section, i) => 
      <Section {...section} key={i} />
    )}
  </main>
);
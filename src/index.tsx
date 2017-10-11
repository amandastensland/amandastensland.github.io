import React from "react";
import styled from "styled-components";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "./layouts/container";
import { Topbar } from "./layouts/topbar";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Footer } from "./layouts/footer";
const index: { title: string } = require("json-loader!yaml-loader!./content/index.yml");

/**
 * Styled
 */
const Hero = styled.div`
  background: url('http://backgroundlabs.com/wp-content/uploads/2013/04/starfield-background.png');
  background-attachment: fixed;
`;
const Main = styled.div`
  display: grid;
  grid-template-columns: minmax(10rem, 1fr) minmax(0, 1fr);
`;

/**
 * Component
 */
export const App = () => (
  <Router>
    <Container>
      <Route path="*" render={() => <Topbar title={index.title} />} />
      <Main>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="*" render={() => <Hero />} />
      </Main>
      <Route path="*" component={Footer} />
    </Container>
  </Router>
);

/**
 * App
 */
const root = document.getElementById("root");
ReactDOM.render( <App />, root );

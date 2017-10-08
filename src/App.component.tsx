import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Topbar } from "./layouts/topbar/topbar.component";
import { Sidebar } from "./layouts/sidebar/sidebar.component";
import { Home } from "./pages/home/home.component";
import { About } from "./pages/about/about.component";
import { Footer } from "./layouts/footer/footer.component";
import { Container } from "./layouts/container/container.component";
import "./app.styled";

const index: { title: string } = require("json-loader!yaml-loader!./content/index.yml");

export const App = () => (
  <Router>
    <Container>
      <Route path="*" render={() => <Topbar title={index.title} />} />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="*" component={Footer} />
    </Container>
  </Router>
);
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Topbar } from "./layouts/Topbar/Topbar.component";
import { Sidebar } from "./layouts/Sidebar/Sidebar.component";
import { Home } from "./pages/Home/Home.component";
import { About } from "./pages/About/About.component";
import { Footer } from "./layouts/Footer/Footer.component";
import "./App.styled";

export const App = () => (
  <Router>
    <div>
      <Route path="/" component={Topbar} />
      {/* <Route path="/" component={Sidebar} /> */}
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/" component={Footer} />
    </div>
  </Router>
);
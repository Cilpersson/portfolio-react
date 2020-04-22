import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { Welcome } from "./Welcome";
import { Tech } from "./Tech";
import { Projects } from "./Projects";
import { Thoughts } from "./Thoughts";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Welcome />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/tech">
          <Tech />
        </Route>
        <Route path="/thoughts">
          <Thoughts />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

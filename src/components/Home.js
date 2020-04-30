import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { Welcome } from "./welcome/Welcome";
import { Tech } from "./tech/Tech";
import { Projects } from "./projects/Projects";
import { Thoughts } from "./thoughts/Thoughts";
import { Cred } from "./cred/Cred";
import { Footer } from "./Footer";
import { ComponentNotFound } from "components/ComponentNotFound";

export const Home = () => {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Welcome />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>
        <Route path="/tech" exact>
          <Tech />
        </Route>
        <Route path="/thoughts" exact>
          <Thoughts />
        </Route>
        <Route path="/credit" exact>
          <Cred />
        </Route>
        <Route path="*">
          <ComponentNotFound />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

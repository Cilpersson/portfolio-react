import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";

export const Nav = () => {
  return (
    <nav id="nav">
      <NavLink smooth="true" to="/#welcome">
        <h2 className="nav-title">$ whoami</h2>
      </NavLink>
      <ul>
        <NavLink to="/projects#projects">
          <li>PROJECTS</li>
        </NavLink>
        <NavLink to="/tech#tech">
          <li>TECH</li>
        </NavLink>
        <NavLink to="/thoughts#thoughts">
          <li>THOUGHTS</li>
        </NavLink>
        <NavLink to="/credit#credit">
          <li>CREDIT</li>
        </NavLink>
      </ul>
    </nav>
  );
};

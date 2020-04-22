import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav id="nav">
      <NavLink to="/" exact>
        <h2 className="nav-title">$ whoami</h2>
      </NavLink>

      <ul>
        <NavLink to="/tech">
          <li>TECH</li>
        </NavLink>
        <NavLink to="/projects">
          <li>PROJECTS</li>
        </NavLink>
        <NavLink to="/thoughts">
          <li>THOUGHTS</li>
        </NavLink>
      </ul>
    </nav>
  );
};

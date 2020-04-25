import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";

export const Nav = () => {
  return (
    <nav id="nav">
      <NavLink smooth="true" to="/#nav">
        <h2 className="nav-title">$ whoami</h2>
      </NavLink>
      <ul>
        <NavLink smooth="true" to="/tech#nav">
          <li>TECH</li>
        </NavLink>
        <NavLink smooth="true" to="/projects#nav">
          <li>PROJECTS</li>
        </NavLink>
        <NavLink smooth="true" to="/thoughts#nav">
          <li>THOUGHTS</li>
        </NavLink>
      </ul>
    </nav>
  );
};

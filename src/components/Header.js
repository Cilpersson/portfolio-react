import React from "react";

import { DownArrow } from "./DownArrow";

export const Header = () => {
  return (
    <header className="header">
      <section className="header-section">
        <h1>
          <span className="header-span"></span>
        </h1>
      </section>
      <a href="#nav" className="header-button">
        <DownArrow />
      </a>
    </header>
  );
};

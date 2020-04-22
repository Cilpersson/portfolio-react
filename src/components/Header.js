import React from "react";
import Typing from "react-typing-animation";

import { DownArrow } from "./DownArrow";

export const Header = () => {
  return (
    <header className="header">
      <section className="header-section">
        <Typing loop="true" hideCursor="true" speed={150}>
          <span className="header-span">Web Developer</span>
          <Typing.Reset count={1} delay={450} />
        </Typing>
      </section>
      <a href="#nav" className="header-button">
        <DownArrow />
      </a>
    </header>
  );
};

import React from "react";
import Typing from "react-typing-animation";
import { HashLink as Link } from "react-router-hash-link";
import { DownArrow } from "./DownArrow";

export const Header = () => {
  return (
    <header className="header">
      <section className="header-section">
        <Typing loop={true} hideCursor="true" speed={150}>
          <span className="header-span">Web Developer</span>
          <Typing.Reset count={1} delay={450} />
        </Typing>
      </section>
      <div className="header-button">
        <Link smooth="true" to="/#nav">
          <DownArrow />
        </Link>
      </div>
    </header>
  );
};

import React from "react";
import { Linkedin } from "./Linkedin";
import { Github } from "./Github";
import { Mail } from "./Mail";
import { CodeSnippet } from "./CodeSnippet";

export const Welcome = () => {
  const styling = {
    border: "3px solid black",
    padding: "5px",
  };
  return (
    <section className="main-wrapper">
      <div id="welcome" />
      <div className="testing" />
      <h3>ABOUT ME</h3>
      <span className="emoji" role="img" aria-label="Waving hand">
        👋
      </span>
      <section className="about-me">
        <CodeSnippet />
      </section>
      <div className="welcome-social-media">
        <a
          href="mailto:hello@christinapersson.se?subject=Let's do cool stuff together!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail size={"50pt"} style={styling} />
        </a>
        <a
          href="https://www.linkedin.com/in/christina-persson-b3231ba2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={"50pt"} style={styling} />
        </a>
        <a
          href="https://github.com/Cilpersson"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={"50pt"} style={styling} />
        </a>
      </div>
    </section>
  );
};

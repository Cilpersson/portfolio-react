import React from "react";
import { Linkedin } from "./Linkedin";
import { Github } from "./Github";
import { Mail } from "./Mail";

export const Welcome = () => {
  return (
    <section id="welcome" className="main-wrapper">
      <div className="testing"></div>
      <h3>ABOUT ME</h3>

      <span className="emoji" role="img" aria-label="Waving hand">
        👋
      </span>
      <section className="about-me">
        <p className="about-me-p">
          {" "}
          <span className="about-me-span-mono">const info = {"{"}</span>
          <br />
          <br />
          <span className="about-me-span-mono">name:</span> "Christina Persson",
          <br />
          <span className="about-me-span-mono">age:</span> NaN,
          <br />
          <span className="about-me-span-mono">dreamJob:</span> "developing
          software for cars 🚙💨",
          <br />
          <span className="about-me-span-mono">dogLover:</span> true,
          <br />
          <span className="about-me-span-mono">description:</span> "I enjoy
          taking care of my plants and bouldering. Bouldering matches my passion
          for programming because they both focus on solving problems. Getting
          from point A to point B as effectively and graciously as possible is
          just as fun for me if I’m climbing or coding. My fingers are the
          common denominator that makes both things a lot easier to perform."
          <br />
          <br />
          <span className="about-me-span-mono">{"}"}</span>
        </p>
      </section>
      <div className="welcome-social-media">
        <a
          href="mailto:hello@christinapersson.se?subject=Let's do cool stuff together!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail />
        </a>
        <a
          href="https://www.linkedin.com/in/christina-persson-b3231ba2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/Cilpersson"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
      </div>
    </section>
  );
};

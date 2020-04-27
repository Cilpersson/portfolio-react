import React from "react";
import Lottie from "lottie-react-web";
import animation from "animations/404-space-error.json";

import { Github } from "./Github";
import { Linkedin } from "./Linkedin";
import { Mail } from "./Mail";

export const Cred = () => {
  return (
    <section id="cred" className="credit-main-wrapper">
      <div className="testing"></div>
      <h3>CREDIT</h3>
      <div className="credit-wrapper-icons">
        <p className="credit">
          Icons by:
          <a
            className="credit-a"
            href="https://www.flaticon.com/authors/dave-gandy"
            title="Dave Gandy"
          >
            Dave Gandy
          </a>
        </p>
      </div>
      <p className="credit-single">
        Images by:
        <a
          className="credit-a"
          href="https://unsplash.com/@georgie_cobbs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Georgie Cobbs
        </a>
      </p>
      <div className="credit-wrapper-lottie">
        <Lottie
          options={{
            animationData: animation,
          }}
          width="250px"
          height="250px"
        />
        <p className="credit">
          Animation by:
          <a className="credit-a" href="https://lottiefiles.com/kastnerskasten">
            Felix Kastner
          </a>
        </p>
      </div>
    </section>
  );
};

/*
 <div className="credit-wrapper-social-media">
          <Github size={"15pt"} style={styling} />
          <Linkedin size={"15pt"} style={styling} />
          <Mail size={"15pt"} style={styling} />
        </div>
*/

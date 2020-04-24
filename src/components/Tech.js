import React from "react";
import techimage from "images/techimage.jpg";

export const Tech = () => {
  return (
    <section id="tech" className="main-wrapper">
      <div className="testing"></div>
      <h3>TECH</h3>
      <section className="all-tech-containers">
        <div className="tech-container">
          HTML, CSS, SASS, Flexbox, Grid, CSS-animations, CSS-in-JS &
          Styled-components
        </div>
        <div className="tech-container">
          JavaScript, ES6, JSX, React, React Hooks, Redux & Java
        </div>
        <div className="tech-container">
          API:s, mob- & pair programming, Git, Web Accessibly, UML & BPMN
        </div>
        <div className="tech-container">Node.js, Mongo DB & SQL,</div>
      </section>
      <div>
        <img
          className="tech-image"
          src={techimage}
          alt="Computer and cup off coffee"
        />
      </div>
    </section>
  );
};

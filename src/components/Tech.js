import React from "react";
import techimage from "images/techimage.jpg";

export const Tech = () => {
  return (
    <section className="main-wrapper">
      <div id="tech" />
      <div className="testing" />
      <h3>TECH</h3>
      <section className="all-tech-containers">
        <div className="tech-container">
          <span role="img" aria-label="Nail polish">
            💅
          </span>{" "}
          <span>CSS</span>, <span>SASS</span>, <span>Flexbox</span>,{" "}
          <span>Grid</span>, <span>CSS</span>-<span>animations</span>,
          <span>CSS</span>-<span>in</span>-<span>JS</span> & <span>Styled</span>
          -<span>components</span>
        </div>
        <div className="tech-container">
          <span role="img" aria-label="Computer girl">
            👩‍💻
          </span>{" "}
          <span>JavaScript</span>, <span>ES6</span>, <span>HTML</span>,{" "}
          <span>JSX</span>, <span>React</span>, <span>React Hooks</span>,{" "}
          <span>React Native</span>, <span>Redux</span> & <span>Java</span>
        </div>
        <div className="tech-container">
          <span role="img" aria-label="Pencil">
            ✏️
          </span>{" "}
          <span>API:s</span>, <span>mob</span>- & <span>pair</span>{" "}
          <span>programming</span>, <span>Git</span>, <span>Web</span>{" "}
          <span>Accessibly</span>, <span>UML</span> & <span>BPMN</span>
        </div>
        <div className="tech-container">
          <span role="img" aria-label="Back arrow">
            🔙
          </span>{" "}
          <span>Node</span>.<span>js</span>, <span>Mongo</span> <span>DB</span>,{" "}
          <span>SQL</span>
          <span></span>
        </div>
      </section>
      <div className="tech-image-container">
        <img
          className="tech-image"
          src={techimage}
          alt="Computer and cup of coffee"
        />
      </div>
    </section>
  );
};

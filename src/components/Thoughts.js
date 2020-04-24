import React from "react";
import thoughtTwo from "images/thoughts/thoughts2.jpg";
import thoughtThree from "images/thoughts/thoughts3.jpg";

export const Thoughts = () => {
  return (
    <section id="thoughts" className="main-wrapper">
      <div className="testing"></div>
      <h3>THOUGHTS</h3>

      <div className="thoughts-container">
        <a
          href="https://webdeveloperinthemaking.netlify.com/#sprint-three"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="thoughts-img"
            src={thoughtThree}
            alt="Hands with plastic gloves fist bumping"
          />
          <span className="thoughts-span">APR 2020</span>
          <p className="thoughts-header">Keep calm and code on!</p>
          <p>
            It’s been a weird start to this decade, the fact that a pandemic is
            currently putting entire countries in quarantine is something that
            happens on planet earth in the movie universe, not on the actual
            planet we all live on. Well that was what I thought at least.
            <span style={{ textDecoration: "underline" }}>&gt;&gt;</span>
          </p>
        </a>
      </div>

      <div className="thoughts-container">
        <a
          href="https://webdeveloperinthemaking.netlify.com/#sprint-two"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="thoughts-img"
            src={thoughtTwo}
            alt="Pink neon light that says breath"
          />
          <span className="thoughts-span">MAR 2020</span>
          <p className="thoughts-header">Is this really impossible?</p>
          <p>
            The second sprint, and first part, of the course is over. It feels a
            bit surreal to be honest. When I applied to attend the Technigo
            bootcamp I was so nervous and spent way too many hours on the code
            application. The suggested amount of hours was about four but I
            spent close to three days.
            <span style={{ textDecoration: "underline" }}>&gt;&gt;</span>
          </p>
        </a>
      </div>
    </section>
  );
};

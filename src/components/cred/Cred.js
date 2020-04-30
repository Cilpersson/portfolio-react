import React from "react";
import Lottie from "lottie-react-web";
import animation from "animations/404-space-error.json";

export const Cred = () => {
  return (
    <section className="credit-main-wrapper">
      <div id="cred" />
      <div className="testing" />
      <h3>CREDIT</h3>
      <div className="credit-wrapper-icons">
        <p className="credit">
          Icons by:
          <a
            className="credit-a"
            href="https://www.flaticon.com/authors/dave-gandy"
            title="Dave Gandy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dave Gandy
          </a>
        </p>
      </div>
      <p className="credit-single">
        Images by:
        <a
          target="_blank"
          rel="noopener noreferrer"
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
          <a
            className="credit-a"
            href="https://lottiefiles.com/kastnerskasten"
            target="_blank"
            rel="noopener noreferrer"
          >
            Felix Kastner
          </a>
        </p>
      </div>
    </section>
  );
};

import React from "react";
import Lottie from "lottie-react-web";
import animation from "animations/404-space-error.json";

export const ComponentNotFound = () => {
  return (
    <section id="404" className="main-wrapper">
      <div className="testing"></div>
      <h3>OH NO 🤭</h3>
      <Lottie
        options={{
          animationData: animation,
        }}
      />
    </section>
  );
};

import React from "react";
import Lottie from "lottie-react-web";
import animation from "animations/404-space-error.json";

export const ComponentNotFound = () => {
  return (
    <section className="wrapper-404">
      <div className="testing"></div>
      <h3 className="text-404">OH NO 🤭</h3>

      <Lottie
        options={{
          animationData: animation,
        }}
        width="60%"
      />
    </section>
  );
};

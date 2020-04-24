import React from "react";
import { GithubTiny } from "./GithubTiny";

export const ReactNative = () => {
  return (
    <div>
      <div
        data-snack-id="@cilpersson/react-native---first-project"
        data-snack-platform="ios"
        data-snack-preview="true"
        data-snack-theme="light"
        style={{
          overflow: "hidden",
          background: "#fafafa",
          border: "1px solid rgba(0,0,0,.08)",
          borderRadius: "4px",
          height: "600px",
          width: "100%",
          margin: "auto",
          marginTop: "20px",
        }}
      ></div>

      <h4 className="github-link">GITHUB REPO {<GithubTiny />}</h4>
      <p>
        <span>APP.</span> Mobile app built with React Native, using API to fetch
        data about a random beer{" "}
        <span style={{ textDecoration: "underline" }}>&gt;&gt;</span>
      </p>
      <div className="tag-container">
        <h4>react native</h4>
        <h4>JSX</h4>
        <h4>git</h4>
        <h4>styled-components</h4>
        <h4>CSS-in-JS</h4>
        <h4>API</h4>
      </div>
    </div>
  );
};

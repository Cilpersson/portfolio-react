import React, { useState } from "react";
import { GithubTiny } from "./GithubTiny";

export const ReactNative = () => {
  const [load, setLoad] = useState(false);
  const handeOnClick = () => {
    setLoad(!load);
  };
  return (
    <>
      {load && (
        <div>
          <iframe
            title="React native code"
            src="https://snack.expo.io/@cilpersson/react-native---first-project?platform=ios"
            // src={`https://appetize.io/embed/8bnmakzrptf1hv9dq7v7bnteem?autoplay=false&debug=true&device=iphone6s&deviceColor=black&embed=true&orientation=portrait&screenOnly=false&xDocMsg=true&xdocMsg=true&params=%7B%22EXKernelLaunchUrlDefaultsKey%22:%22exp:%2F%2Fexpo.io%2F@cilpersson%2Freact-native---first-project%2BKtk9Dy3E3%22,%22EXKernelDisableNuxDefaultsKey%22:true%7D&scale=75&osVersion=13.3`}
            style={{
              overflow: "hidden",
              background: "#fafafa",
              border: "1px solid rgba(0,0,0,.08)",
              borderRadius: "4px",
              height: "725px",
              width: "100%",
              margin: "auto",
              marginTop: "20px",
            }}
          ></iframe>
          <a
            href="https://github.com/Cilpersson/project-react-native-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="github-link">GITHUB REPO {<GithubTiny />}</h4>
          </a>
          <p>
            <span>APP.</span> Mobile app built with React Native, using API to
            fetch data about a random beer{" "}
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
      )}
      <button className="code-button" onClick={() => handeOnClick()}>
        {load ? "Click to hide embeded code" : "Click to view embeded code"}
      </button>
    </>
  );
};

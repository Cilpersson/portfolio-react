import React from "react";
import styled from "styled-components";
import { Linkedin } from "../icons_and_buttons/Linkedin";
import { Github } from "../icons_and_buttons/Github";
import { Mail } from "../icons_and_buttons/Mail";
import { CodeSnippet } from "./CodeSnippet";

export const Welcome = () => {
  const styling = {
    border: "3px solid black",
    padding: "5px",
  };

  return (
    <MainWrapper id="welcome">
      <Space></Space>
      <Title>ABOUT ME</Title>
      <Emoji ariaLabel="Waving hand">👋</Emoji>
      <AboutMe className="about-me">
        <CodeSnippet />
      </AboutMe>
      <SocialMediaWrapper>
        <A
          href="mailto:hello@christinapersson.se?subject=Let's do cool stuff together!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail size={"50pt"} style={styling} />
        </A>
        <A
          href="https://www.linkedin.com/in/christina-persson-b3231ba2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={"50pt"} style={styling} />
        </A>
        <A
          href="https://github.com/Cilpersson"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={"50pt"} style={styling} />
        </A>
      </SocialMediaWrapper>
    </MainWrapper>
  );
};
const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px;
  min-height: 88vh;

  background: #fff;

  @media (min-width: 668px) {
    padding: 20px 40px;
  }

  @media (min-width: 1024px) {
    padding: 20px 250px;
  }
`;
const Space = styled.div`
  height: 82px;
`;

const Title = styled.h3`
  text-align: center;
  font-weight: bolder;
  font-size: 30px;
  letter-spacing: 1px;

  width: fit-content;

  margin: 0 auto 20px;
  padding: 2px 6px;

  color: #000;
  background: #fbd444;

  @media (min-width: 1024px) {
    font-size: 50px;
  }
`;

const Emoji = styled.span.attrs(({ ariaLabel }) => ({
  role: "img",
  "aria-label": ariaLabel,
}))`
  text-align: center;
  font-size: 65px;
  margin: 0;
  opacity: 0.8;
`;

const AboutMe = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  padding: 30px;
  margin: auto;

  box-sizing: border-box;
  box-shadow: inset -10px 0px #d6d1cd, inset -20px 0px #fbd444,
    inset 10px 0px #fbd444, inset 20px 0px #d6d1cd;

  @media (min-width: 668px) {
    padding: 40px;
  }
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background: #fbd444;
  height: 100px;
  width: 280px;
  margin: auto;

  &:hover > *:not(:hover) {
    opacity: 0.3;
  }

  &:hover > *:hover {
    transform: scale(1.05);
  }
`;

const A = styled.a`
  text-decoration: none;
  color: #fff;
  width: fit-content;
  transition: all 0.2s;
`;

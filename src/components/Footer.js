import React from "react";
import styled from "styled-components";
import { Linkedin } from "./icons_and_buttons/Linkedin";
import { Github } from "./icons_and_buttons/Github";
import { Mail } from "./icons_and_buttons/Mail";

export const Footer = () => {
  const styling = {
    border: "1px solid black",
    padding: "3px",
    margin: "3px",
  };
  return (
    <FooterWrapper>
      <Text>
        <P>I made this, </P>
        <B>too</B>.
      </Text>
      <Wrapper>
        <A
          href="mailto:hello@christinapersson.se?subject=Let's do cool stuff together!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail size={"10pt"} style={styling} />
        </A>
        <A
          href="https://www.linkedin.com/in/christina-persson-b3231ba2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={"10pt"} style={styling} />
        </A>
        <A
          href="https://github.com/Cilpersson"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={"10pt"} style={styling} />
        </A>
      </Wrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fbd444;

  padding: 10px 0;
  margin-top: 15px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: row;
`;
const Wrapper = styled.div`
  &:hover > *:not(:hover) {
    opacity: 0.3;
  }
`;

const P = styled.p`
  display: inline;
  margin: 0;
`;

const B = styled.p`
  font-weight: bolder;
  margin: 0 0 0 5px;
`;

const A = styled.a`
  text-decoration: none;
  color: #fff;
  width: fit-content;
  transition: all 0.2s;
`;

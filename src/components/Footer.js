import React from "react";
import styled from "styled-components";
import { Linkedin } from "./Linkedin";
import { Github } from "./Github";
import { Mail } from "./Mail";

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
        <a
          href="mailto:hello@christinapersson.se?subject=Let's do cool stuff together!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail size={"10pt"} style={styling} />
        </a>
        <a
          href="https://www.linkedin.com/in/christina-persson-b3231ba2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={"10pt"} style={styling} />
        </a>
        <a
          href="https://github.com/Cilpersson"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={"10pt"} style={styling} />
        </a>
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
`;

const Text = styled.div`
  display: flex;
  flex-direction: row;
`;
const Wrapper = styled.div``;

const P = styled.p`
  display: inline;
  margin: 0;
`;

const B = styled.p`
  font-weight: bolder;
  margin: 0 0 0 5px;
`;

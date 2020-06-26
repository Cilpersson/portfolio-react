import React from "react";
import Typing from "react-typing-animation";
// import { HashLink as Link } from "react-router-hash-link";
import { Link } from "react-scroll";
import styled, { keyframes } from "styled-components";
import { DownArrow } from "./icons_and_buttons/DownArrow";
import mobileBackground from "../images/header/headermobile.jpg";
import background from "../images/header/header.jpg";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Layer>
        <Typing loop={true} hideCursor="true" speed={200}>
          <Span>DEVELOPER</Span>
          <Typing.Reset count={1} delay={550} />
        </Typing>
        <Button>
          <Link smooth={true} to="welcome">
            <DownArrow />
          </Link>
        </Button>
      </Layer>
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: black;
  background-image: url(${mobileBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 668px) {
    background-image: url(${background});
  }
`;

const Layer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: #00000015;
`;

const Span = styled.span`
  color: #fff;
  font-size: 14vw;
  font-weight: lighter;
`;

const floating = keyframes`
0% {
  bottom: 0px;
}
50% {
  bottom: 15px;
}
100% {
  bottom: 0px;
}`;

const Button = styled.div`
  position: absolute;
  bottom: 0;
  border: none;
  background: none;
  transition: 0.3s;
  animation: ${floating} 1.5s ease-in-out infinite;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

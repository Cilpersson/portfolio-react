import React from "react";
import styled from "styled-components";

export const Tag = ({ text }) => {
  return <TagStyled>{text}</TagStyled>;
};

const TagStyled = styled.p`
  font-family: "Roboto";
  color: #000;
  background: #d6d1cd;
  margin: 0;
  white-space: nowrap;
  font-weight: bolder;
  letter-spacing: 2px;
  padding: 4px;
  margin: 4px 4px 4px 0;
  width: fit-content;

  box-shadow: inset 0px 15px #fbd444;
`;

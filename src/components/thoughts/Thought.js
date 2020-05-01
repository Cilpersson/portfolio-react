import React from "react";
import styled from "styled-components";

export const Thought = ({ link, img, alt, date, title, previewText }) => {
  return (
    <ThoughtContainer>
      <A href={link} target="_blank" rel="noopener noreferrer">
        <Img className="thoughts-img" src={img} alt={alt} />
        <ThoughtSpan>{date}</ThoughtSpan>
        <Title>{title}</Title>
        <P>
          {previewText}
          <Span style={{ textDecoration: "underline" }}>&gt;&gt;</Span>
        </P>
      </A>
    </ThoughtContainer>
  );
};
const ThoughtContainer = styled.section`
  flex-direction: row;
  margin: 30px auto 0;
  padding: 5px;
  align-items: center;
  border: 5px solid #000;
  @media (min-width: 668px) {
    width: 80%;
  }
`;

const A = styled.a`
  text-decoration: none;
  color: #fff;
  width: fit-content;
`;

const Title = styled.p`
  font-weight: bold;
  margin: 5px 0;
  font-size: 17px;
  align-self: flex-start;
  text-decoration: underline;
`;

const ThoughtSpan = styled.h4`
  font-family: "Roboto";
  color: #000;
  background: #d6d1cd;
  white-space: nowrap;
  font-weight: bolder;
  letter-spacing: 2px;
  padding: 4px;
  margin: 4px 4px 4px 0;
  width: fit-content;

  box-shadow: inset 0px 15px #fbd444;
`;

const P = styled.p`
  text-align: justify;
`;

const Span = styled.span`
  font-family: "Roboto";
  font-weight: bold;
  color: #000;
  margin-left: 5px;
`;

const Img = styled.img``;

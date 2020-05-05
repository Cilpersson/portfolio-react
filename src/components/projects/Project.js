import React from "react";
import styled from "styled-components";
import { Tag } from "components/projects/Tag";
import { Github } from "../icons_and_buttons/Github";

export const Project = ({
  netlifyURL,
  githubURL,
  imgSrc,
  imgAlt,
  title,
  subTitle,
  description,
  listOfTags,
}) => {
  return (
    <ProjectCard>
      <A href={netlifyURL} target="_blank" rel="noopener noreferrer">
        <ProjectView>
          <Img src={imgSrc} alt={imgAlt} />
          <Layer></Layer>
          <Title className="project-title">{title}</Title>
        </ProjectView>
      </A>
      <A href={githubURL} target="_blank" rel="noopener noreferrer">
        <GithubLink>GITHUB REPO {<Github size={"15pt"} />}</GithubLink>
      </A>
      <P>
        <Span>{subTitle}</Span>
        {description}
        <Span style={{ textDecoration: "underline" }}>&gt;&gt;</Span>
      </P>
      <TagContainer>
        {listOfTags.map((tag, index) => (
          <Tag text={tag} key={index} />
        ))}
      </TagContainer>
    </ProjectCard>
  );
};

const ProjectCard = styled.div`
  margin: 0 5px 5px 5px;
`;

const A = styled.a`
  text-decoration: none;
  color: #fff;
  width: fit-content;
`;

const P = styled.p`
  color: #000;
  margin: 0 0 10px 0;
`;

const Span = styled.span`
  font-family: "Roboto";
  font-weight: bold;
  color: #000;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const GithubLink = styled.h4`
  font-family: "Roboto";
  color: #000;
  background: #fbd444;

  font-size: 20px;
  font-weight: bold;
  letter-spacing: 6px;
  text-align: center;

  padding: 4px;
  margin: 10px auto;

  width: 100%;

  box-sizing: border-box;
  box-shadow: inset 0px 16px #d6d1cd;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layer = styled.div`
  background: #000;
  opacity: 0.7;
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 5;
  width: 100%;
  z-index: 3;
  visibility: visible;
`;

const Title = styled.h2`
  font-size: 40px;
  grid-row-start: 1;
  z-index: 5;
  align-self: center;
  justify-self: center;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 668px) {
    font-size: 40px;
  }
  @media (min-width: 1024px) {
    font-size: 55px;
  }
`;

const ProjectView = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  justify-self: center;
  margin: 36px auto 0;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(0.95);
  }

  &:hover ${Layer} {
    opacity: 0;
    transition: opacity 0.4s ease-out;
  }

  &:hover ${Title} {
    opacity: 0;
    transition: opacity 0.4s ease-out;
  }
`;

const Img = styled.img`
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 5;
  width: 100%;
`;

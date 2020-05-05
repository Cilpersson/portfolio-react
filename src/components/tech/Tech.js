import React from "react";
import styled from "styled-components";
import techimage from "images/techimage2.jpg";
import { TechBox } from "components/tech/TechBox";

export const Tech = () => {
  const skillsStyling = [
    "CSS",
    "SASS",
    "Flexbox",
    "Grid",
    "CSS-animations",
    "CSS-in-JS",
    "Styled-components",
  ];

  const skillsCode = [
    "JavaScript",
    "ES6",
    "HTML",
    "JSX",
    "React",
    "React - Functional components w. hooks",
    "React Native",
    "Redux",
    "Java",
  ];

  const skillsOther = [
    "API",
    "Git",
    "Mob programming",
    "Pair programming",
    "Web Accessibly",
    "UML",
    "BPMN",
  ];

  const skillsBack = ["Node.js", "Mongo DB", "SQL"];

  return (
    <MainWrapper id="tech">
      <Space></Space>
      <Title>TECH</Title>
      <AllTechContainers>
        <TechBox
          listOfSkills={skillsStyling}
          emoji=" 💅 "
          ariaLabel="Nail polish"
        />
        <TechBox
          listOfSkills={skillsCode}
          emoji=" 👩‍💻 "
          ariaLabel="Computer girl"
        />

        <TechBox listOfSkills={skillsOther} emoji=" ‍✏️ " ariaLabel="Pencil" />

        <TechBox
          listOfSkills={skillsBack}
          emoji=" ‍🔙 "
          ariaLabel="Back arrow"
        />
      </AllTechContainers>
      <TechImageContainer>
        <Img src={techimage} alt="Computer and cup of coffee" />
      </TechImageContainer>
    </MainWrapper>
  );
};

const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px;
  min-height: 90vh;

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
`;

const AllTechContainers = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 10px;

  @media (min-width: 668px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`;

const TechImageContainer = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const Img = styled.img`
  width: inherit;
`;

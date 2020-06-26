import React from "react";
import styled from "styled-components";
import { ReactNative } from "components/projects/ReactNative";
import { Project } from "components/projects/Project";
import directors from "../../images/projects/movies.png";
import music from "../../images/projects/music.png";
import thoughts from "../../images/projects/happythoughts.png";
import barcode from "../../images/projects/barcode.png";
import dogquiz from "../../images/projects/quiz.png";
import todo from "../../images/projects/todo.png";
import reduxquiz from "../../images/projects/redux-quiz.png";
import portfolio from "../../images/projects/portfolio.png";
import astronauts from "../../images/projects/astronauts.png";
import auth from "../../images/projects/auth.png";
import photogrid from "../../images/projects/photogrid.png";

export const Projects = () => {
  const photogridList = [
    "react",
    "redux",
    "JSX",
    "styled-components",
    "API",
    "Mongo DB",
    "Mongoose",
    "Postman",
    "Node.js",
    "Cloudinary",
    "git",
  ];
  const authList = [
    "react",
    "JSX",
    "SASS",
    "API",
    "Mongo DB",
    "Node.js",
    "pair-programming",
    "git",
  ];
  const todoList = ["react", "redux", "JSX", "styled-components", "git"];
  const reduxquizList = ["react", "redux", "JSX", "styled-components", "git"];
  const directorsList = ["react", "JSX", "CSS 3", "API", "git"];
  const musicList = ["react", "JSX", "CSS 3", "API", "pair-programming", "git"];
  const thoughtsList = [
    "react",
    "JSX",
    "SASS",
    "API",
    "Mongo DB",
    "Node.js",
    "git",
  ];
  const dogquizList = ["react", "JSX", "CSS 3", "git"];
  const portfolioList = ["react", "JSX", "styled-components", "git"];
  const astronautsList = [
    "react",
    "redux",
    "JSX",
    "styled-components",
    "API",
    "git",
  ];
  const barcodeList = [
    "react",
    "redux",
    "JSX",
    "styled-components",
    "API",
    "pair-programming",
    "git",
  ];

  return (
    <MainWrapper id="projects">
      <Space />
      <Title>FEATURED PROJECTS</Title>
      <CardGrid>
        <Project
          netlifyURL="https://www.photogrid.community"
          githubURL="https://github.com/Cilpersson/final-project"
          imgSrc={photogrid}
          imgAlt="Portfolio frontpage"
          title="PHOTO GRID"
          subTitle="SITE."
          description=" My final project for the Technigo boot camp. This is my no 1 pet project, I come up with new things I want to add all the time. This project truly defines who I am as a developer. If you wish to read more about it there is a reflections page on the website. "
          listOfTags={photogridList}
        />
        <Project
          netlifyURL="http://christinapersson.se/"
          githubURL="https://github.com/Cilpersson/portfolio-react"
          imgSrc={portfolio}
          imgAlt="Portfolio frontpage"
          title="PORTFOLIO"
          subTitle="SITE."
          description=" My portfolio built in react using styled-components "
          listOfTags={portfolioList}
        />
        <Project
          netlifyURL="https://authentication-login.netlify.app/"
          githubURL="https://github.com/Cilpersson/project-auth"
          imgSrc={auth}
          imgAlt="Movie site frontpage"
          title="SIGN UP FORM"
          subTitle="SITE."
          description=" Signup and login form with backend authentication and password encryption "
          listOfTags={authList}
        />
        <Project
          netlifyURL="https://pretty-decent-directors.netlify.com/"
          githubURL="https://github.com/Cilpersson/project-movies"
          imgSrc={directors}
          imgAlt="Movie site frontpage"
          title="MOVIE SITE"
          subTitle="SITE."
          description=" Multi page website built with React, using API to fetch data "
          listOfTags={directorsList}
        />

        <Project
          netlifyURL="https://food-quiz.netlify.app/"
          githubURL="https://github.com/Cilpersson/project-redux-quiz-hippos"
          imgSrc={reduxquiz}
          imgAlt="Food quiz frontpage"
          title="FOOD QUIZ APP"
          subTitle="APP."
          description=" Food quiz built with React & Redux - Mob programming
          project"
          listOfTags={reduxquizList}
        />
        <Project
          netlifyURL="https://perssons-happy-thoughts.netlify.com/"
          githubURL="https://github.com/Cilpersson/project-happy-thoughts"
          imgSrc={thoughts}
          imgAlt="Happy thoughts app frontpage"
          title="HAPPY THOUGHTS"
          subTitle="APP."
          description=" Fullstack project. Site to read, like and post short messages. Posts and likes gets stored in a DB via an API "
          listOfTags={thoughtsList}
        />
        {/* <Project
          netlifyURL="https://palm-oil-free.netlify.app/"
          githubURL="https://github.com/Cilpersson/project-nutrition"
          imgSrc={barcode}
          imgAlt="Barcode scanner app frontpage"
          title="SCANNER"
          subTitle="APP."
          description=" Site that uses the devices camera to scan a
          barcode. Provides information from a food API - Pair programming
          project "
          listOfTags={barcodeList}
        /> */}
        <Project
          netlifyURL="https://perssons-todo.netlify.app/"
          githubURL="https://github.com/Cilpersson/project-todos"
          imgSrc={todo}
          imgAlt="Todo app frontpage"
          title="TODO APP"
          subTitle="APP."
          description=" Todo app built with React & Redux "
          listOfTags={todoList}
        />

        {/* <Project
          netlifyURL="https://dog-survey.netlify.app/"
          githubURL="https://github.com/Cilpersson/project-survey"
          imgSrc={dogquiz}
          imgAlt="Dog quiz frontpage"
          title="DOG QUIZ"
          subTitle="APP."
          description=" Dog quiz created with React components "
          listOfTags={dogquizList}
        /> */}
        <Project
          netlifyURL="https://popularonspotify.netlify.com/"
          githubURL="https://github.com/Cilpersson/project-music-releases"
          imgSrc={music}
          imgAlt="Music site frontpage"
          title="POPULAR MUSIC"
          subTitle="SITE."
          description=" Music site built with React, using API to fetch
          data - Pair programming
          project "
          listOfTags={musicList}
        />
        <Project
          netlifyURL="https://people-in-space-right-now.netlify.app/"
          githubURL="https://github.com/Cilpersson/people-in-space"
          imgSrc={astronauts}
          imgAlt="People in space frontpage"
          title="ASTRO FACTS"
          subTitle="SITE."
          description=" Little side project showing how many people that are in space right now. This is a work in progress. Next step is to create my own API with space facts. "
          listOfTags={astronautsList}
        />
      </CardGrid>
      {/* {<ReactNative />} */}
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
  text-shadow: 1px 1px #fff, 2px 2px #d6d1cd;

  @media (min-width: 1024px) {
    font-size: 50px;
    text-shadow: 2px 2px #fff, 4px 4px #d6d1cd;
  }
`;

const CardGrid = styled.section`
  display: grid;
  justify-content: center;
  gap: 20px 50px;
  margin: auto;
  justify-self: center;
  grid-template-columns: 1fr;

  @media (min-width: 668px) {
    grid-template-columns: 1fr 1fr;
  }
`;

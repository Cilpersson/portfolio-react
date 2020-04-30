import React from "react";
import directors from "../../images/projects/movies.png";
import music from "../../images/projects/music.png";
import thoughts from "../../images/projects/happythoughts.png";
import barcode from "../../images/projects/barcode.png";
import dogquiz from "../../images/projects/quiz.png";
import todo from "../../images/projects/todo.png";
import { ReactNative } from "components/projects/ReactNative";
import { Project } from "components/projects/Project";

export const Projects = () => {
  const todoList = ["react", "redux", "JSX", "styled-components", "git"];
  const directorsList = ["react", "JSX", "CSS 3", "API", "git"];
  const musicList = ["react", "JSX", "CSS 3", "API", "pair-programming", "git"];
  const thoughtsList = ["react", "JSX", "SASS", "API", "git"];
  const barcodeList = [
    "react",
    "redux",
    "JSX",
    "styled-components",
    "API",
    "pair-programming",
    "git",
  ];
  const dogquizList = ["react", "JSX", "CSS 3", "git"];

  return (
    <section id="projects" className="main-wrapper">
      <div className="testing"></div>
      <h3>FEATURED PROJECTS</h3>
      <div className="card-grid">
        <Project
          netlifyURL="https://perssons-todo.netlify.app/"
          githubURL="https://github.com/Cilpersson/project-todos"
          imgSrc={todo}
          title="TODO APP"
          subTitle="APP."
          description=" Todo app built with React & Redux "
          listOfTags={todoList}
        />
        <Project
          netlifyURL="https://pretty-decent-directors.netlify.com/"
          githubURL="https://github.com/Cilpersson/project-movies"
          imgSrc={directors}
          title="MOVIE SITE"
          subTitle="SITE."
          description=" Multi page website built with React, using API to fetch data "
          listOfTags={directorsList}
        />
        <Project
          netlifyURL="https://popularonspotify.netlify.com/"
          githubURL="https://github.com/Cilpersson/project-music-releases"
          imgSrc={music}
          title="POPULAR MUSIC"
          subTitle="SITE."
          description=" Music site built with React, using API to fetch
          data - Pair programming
          project "
          listOfTags={musicList}
        />

        <Project
          netlifyURL="https://perssons-happy-thoughts.netlify.com/"
          githubURL="https://github.com/Cilpersson/project-happy-thoughts"
          imgSrc={thoughts}
          title="HAPPY THOUGHTS"
          subTitle="APP."
          description=" Site to read, like and post short messages. Posts and likes gets posted to an API "
          listOfTags={thoughtsList}
        />

        <Project
          netlifyURL="https://palm-oil-free.netlify.app/"
          githubURL="https://github.com/Cilpersson/project-nutrition"
          imgSrc={barcode}
          title="SCANNER"
          subTitle="APP."
          description=" Site that uses the devices camera to scan a
          barcode. Provides information from a food API - Pair programming
          project "
          listOfTags={barcodeList}
        />

        <Project
          netlifyURL="https://dog-survey.netlify.app/"
          githubURL="https://github.com/Cilpersson/project-survey"
          imgSrc={dogquiz}
          title="DOG QUIZ"
          subTitle="APP."
          description=" Dog quiz created with React components "
          listOfTags={dogquizList}
        />
      </div>
      {<ReactNative />}
    </section>
  );
};

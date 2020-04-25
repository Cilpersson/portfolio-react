import React from "react";
import directors from "../images/projects/movies.png";
import music from "../images/projects/music.png";
import thoughts from "../images/projects/happythoughts.png";
import quiz from "../images/projects/redux-quiz.png";
import dogquiz from "../images/projects/quiz.png";
import todo from "../images/projects/todo.png";
import { ReactNative } from "components/ReactNative";
import { GithubTiny } from "./GithubTiny";

export const Projects = () => {
  return (
    <section id="projects" className="main-wrapper">
      <div className="testing"></div>
      <h3>FEATURED PROJECTS</h3>

      <div className="card-grid">
        <div className="project-card">
          <a
            href="https://perssons-todo.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-view">
              <img src={todo} alt="Movie site frontpage" />
              <div className="layer"></div>
              <h2 className="project-title">TODO APP</h2>
            </div>
          </a>
          <a
            href="https://github.com/Cilpersson/project-todos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="github-link">GITHUB REPO {<GithubTiny />}</h4>
          </a>
          <p>
            <span>APP.</span> Todo app built with React & Redux{" "}
            <span style={{ textDecoration: "underline" }}>&gt;&gt;</span>
          </p>
          <div className="tag-container">
            <h4>react</h4>
            <h4>redux</h4>
            <h4>JSX</h4>
            <h4>styled-components</h4>
            <h4>git</h4>
          </div>
        </div>

        <div className="project-card">
          <a
            href="https://pretty-decent-directors.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-view">
              <img src={directors} alt="Movie site frontpage" />
              <div className="layer"></div>
              <h2 className="project-title">MOVIE SITE</h2>
            </div>
          </a>
          <a
            href="https://github.com/Cilpersson/project-movies"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="github-link">GITHUB REPO {<GithubTiny />}</h4>
          </a>
          <p>
            <span>SITE.</span> Multi page website built with React, using API to
            fetch data{" "}
            <span style={{ textDecoration: "underline" }}>&gt;&gt;</span>
          </p>
          <div className="tag-container">
            <h4>react</h4>
            <h4>JSX</h4>
            <h4>git</h4>
            <h4>CSS 3</h4>
            <h4>API</h4>
          </div>
        </div>

        <div className="project-card">
          <a
            href="https://popularonspotify.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-view">
              <img src={music} alt="Music project frontpage" />
              <div className="layer"></div>
              <h2 className="project-title">POPULAR MUSIC</h2>
            </div>
          </a>

          <a
            href="https://github.com/Cilpersson/project-music-releases"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="github-link">GITHUB REPO {<GithubTiny />}</h4>
          </a>
          <p>
            <span>SITE.</span> Music site built with React, using API to fetch
            data - pair project{" "}
            <span style={{ textDecoration: "underline" }}>&gt;&gt;</span>
          </p>
          <div className="tag-container">
            <h4>react</h4>
            <h4>JSX</h4>
            <h4>git</h4>
            <h4>HTML 5</h4>
            <h4>CSS 3</h4>
            <h4>JavaScript ES6</h4>
            <h4>API</h4>
          </div>
        </div>

        <div className="project-card">
          <a
            href="https://perssons-happy-thoughts.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-view">
              <img src={thoughts} alt="Happy thoughts frontpage" />
              <div className="layer"></div>
              <h2 className="project-title">HAPPY THOUGHTS</h2>
            </div>
          </a>
          <a
            href="https://github.com/Cilpersson/project-happy-thoughts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="github-link">GITHUB REPO {<GithubTiny />}</h4>
          </a>
          <p>
            <span>APP.</span> Site to read, like and post short messages. Posts
            and likes gets posted to an API{" "}
            <span style={{ textDecoration: "underline" }}>&gt;&gt;</span>
          </p>
          <div className="tag-container">
            <h4>react</h4>
            <h4>JSX</h4>
            <h4>git</h4>
            <h4>HTML 5</h4>
            <h4>CSS 3</h4>
            <h4>API</h4>
            <h4>SASS</h4>
          </div>
        </div>
        <div className="project-card">
          <a
            href="https://food-quiz.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-view">
              <img src={quiz} alt="Food quiz frontpage" />
              <div className="layer"></div>
              <h2 className="project-title">FOOD QUIZ</h2>
            </div>
          </a>
          <a
            href="https://github.com/Cilpersson/project-redux-quiz-hippos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="github-link">GITHUB REPO {<GithubTiny />}</h4>
          </a>
          <p>
            <span>APP.</span> Food quiz created with React and Redux - group
            project{" "}
            <span style={{ textDecoration: "underline" }}>&gt;&gt;</span>
          </p>
          <div className="tag-container">
            <h4>react</h4>
            <h4>redux</h4>
            <h4>JSX</h4>
            <h4>styled-components</h4>
            <h4>git</h4>
          </div>
        </div>
        <div className="project-card">
          <a
            href="https://dog-survey.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-view">
              <img src={dogquiz} alt="Food quiz frontpage" />
              <div className="layer"></div>
              <h2 className="project-title">DOG QUIZ</h2>
            </div>
          </a>
          <a
            href="https://github.com/Cilpersson/project-survey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="github-link">GITHUB REPO {<GithubTiny />}</h4>
          </a>
          <p>
            <span>APP.</span> Dog quiz created with React components project{" "}
            <span style={{ textDecoration: "underline" }}>&gt;&gt;</span>
          </p>
          <div className="tag-container">
            <h4>react</h4>
            <h4>redux</h4>
            <h4>JSX</h4>
            <h4>styled-components</h4>
            <h4>git</h4>
          </div>
        </div>
      </div>
      {<ReactNative />}
    </section>
  );
};

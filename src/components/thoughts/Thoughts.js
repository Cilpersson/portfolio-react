import React from "react";
import styled from "styled-components";
import { Thought } from "components/thoughts/Thought";
import thought from "images/thoughts/thoughts.jpg";
import thoughtTwo from "images/thoughts/thoughts2.jpg";
import thoughtThree from "images/thoughts/thoughts3.jpg";
import thoughtFour from "images/thoughts/thoughts4.jpg";

export const Thoughts = () => {
  return (
    <MainWrapper id="thoughts">
      <Space></Space>
      <Title>THOUGHTS</Title>
      <Thought
        link="https://webdeveloperinthemaking.netlify.com/#sprint-four"
        img={thoughtFour}
        alt="Sign that says you got this"
        date="APR 2020"
        title="Remeber that you got this!"
        previewText="The Techingo bootcamp is slowly coming to an end, it’s gone by faster than I ever could have imagined. Since the end of the road is closing in, searching for jobs is almost the only thing I do and think about. I hear motivational talks about combining old and new knowledge, becoming that unique snowflake everyone will want to hire. Take your old work experience and… But wait a minute!?

        What if you don’t have years of work experience, does that mean that you can’t profile yourself in a unique way?"
      />
      <Thought
        link="https://webdeveloperinthemaking.netlify.com/#sprint-three"
        img={thoughtThree}
        alt="Hands with plastic gloves fist bumping"
        date="APR 2020"
        title="Keep calm and code on!"
        previewText="It’s been a weird start to this decade, the fact that a pandemic is
        currently putting entire countries in quarantine is something that
        happens on planet earth in the movie universe, not on the actual
        planet we all live on. Well that was what I thought at least."
      />
      <Thought
        link="https://webdeveloperinthemaking.netlify.com/#sprint-two"
        img={thoughtTwo}
        alt="Pink neon light that says breath"
        date="MAR 2020"
        title="Is this really impossible?"
        previewText="The second sprint, and first part, of the course is over. It feels a
      bit surreal to be honest. When I applied to attend the Technigo
      bootcamp I was so nervous and spent way too many hours on the code
      application. The suggested amount of hours was about four but I
      spent close to three days."
      />
      <Thought
        link="https://webdeveloperinthemaking.netlify.app/#sprint-one"
        img={thought}
        alt="Hands typing on keyboard"
        date="FEB 2020"
        title="Is this really impossible?"
        previewText="The first four weeks of this bootcamp have gone by so fast, and at the same time the evening prior to the first meet up day in Stockholm feels like years ago. Everything started with two intense days in Stockholm where I was placed in a team with seven other amazing members. Seven team members that I have not only gotten to know rather well, but also grown fond of, during the past four weeks. With the help of them I have pushed myself out of my comfort zone and started a journey to become a web developer."
      />
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

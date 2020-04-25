import React from "react";
import styled from "styled-components";

export const CodeSnippet = () => {
  return (
    <Terminal>
      <Top>
        <Dot bckgrdColor="#ff6262"></Dot>
        <Dot bckgrdColor="#ffee62"></Dot>
        <Dot bckgrdColor="#4eb953"></Dot>
      </Top>
      <TextArea>
        <Dif fontColor="#d9a1f0">const</Dif> <Dif fontColor="#fa6363">info</Dif>{" "}
        <Dif fontColor="#d9a1f0">=</Dif> <Dif fontColor="#ffdf37">{"{"}</Dif>
        <br />
        name: <Dif fontColor="#8ed6df">"</Dif>
        <Dif fontColor="#aae478">Christina Persson</Dif>
        <Dif fontColor="#8ed6df">"</Dif>
        <Dif fontColor="#8ed6df">,</Dif>
        <br />
        age: <Dif fontColor="orange">NaN</Dif>
        <Dif fontColor="#8ed6df">,</Dif>
        <br />
        dreamJob: <Dif fontColor="#8ed6df">"</Dif>
        <Dif fontColor="#aae478">
          developing software for cars{" "}
          <span role="img" aria-label="Car driving">
            🚙💨
          </span>
        </Dif>
        <Dif fontColor="#8ed6df">"</Dif>
        <Dif fontColor="#8ed6df">,</Dif>
        <br />
        dogLover: <Dif fontColor="orange">true</Dif>
        <Dif fontColor="#8ed6df">,</Dif>
        <br />
        description: <Dif fontColor="#8ed6df">"</Dif>
        <Dif fontColor="#aae478">
          I enjoy taking care of my plants and bouldering. Bouldering matches my
          passion for programming because they both focus on solving problems.
          Getting from point A to point B as effectively and graciously as
          possible is just as fun for me if I’m climbing or coding. My fingers
          are the common denominator that makes both things a lot easier to
          perform.<Dif fontColor="#8ed6df">"</Dif>
        </Dif>
        <br />
        <Dif fontColor="#ffdf37">{"}"}</Dif>
      </TextArea>
    </Terminal>
  );
};

const Dif = styled.span`
  color: ${(props) => props.fontColor};
  font-family: monospace;
  font-weight: normal;
`;

const Terminal = styled.section`
  width: 100%;
  max-width: 575px;
  margin: auto;

  border-radius: 6px;

  background: #1c2024;
`;

const Top = styled.div`
  height: 20px;

  border-radius: 6px 6px 0 0;
  padding: 0 5px;
  background: #d6d1cd;

  display: flex;
  align-items: center;
`;

const Dot = styled.div`
  height: 10px;
  width: 10px;

  margin: 0 3px;

  border-radius: 50%;
  background: ${(props) => props.bckgrdColor};
`;

const TextArea = styled.div`
  color: #fff;
  font-family: monospace;
  font-size: 18px;

  padding: 30px;
`;

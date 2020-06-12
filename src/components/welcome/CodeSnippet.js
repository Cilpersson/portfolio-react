import React from "react";
import styled from "styled-components";

export const CodeSnippet = () => {
  return (
    <>
      <Terminal>
        <Top>
          <Dot bckgrdColor="#ff6262" />
          <Dot bckgrdColor="#ffee62" />
          <Dot bckgrdColor="#4eb953" />
        </Top>
        <TextArea>
          <Dif fontColor="#d9a1f0">const</Dif>{" "}
          <Dif fontColor="#fa6363">info</Dif> <Dif fontColor="#d9a1f0">=</Dif>{" "}
          <Dif fontColor="#ffdf37">{"{"}</Dif>
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
            Programming gives me the chance to be creative, and as with any
            other creative field like music or art doing it 9-5 is not enough. I
            think, live and breathe code and I always want to learn more. When I
            get to discuss with others I learn the most, being surrounded by a
            team is the best way for me to understand. Talking, explaining and
            listening are things I value highly. When I code, no matter how
            tough the obstacle may be I don’t give up. The ‘not giving up part’
            in me is something that has a tendency to spread to others around me
            as well.<Dif fontColor="#8ed6df">"</Dif>
          </Dif>
          <br />
          <Dif fontColor="#ffdf37">{"}"}</Dif>
          <br />
        </TextArea>
      </Terminal>
      <TerminalText>
        Code for the terminal{" "}
        <Anchor
          href="https://codesandbox.io/s/codesnippets-for-react-h0jlq"
          target="_blank"
          rel="noopener noreferrer">
          avilable here
        </Anchor>
      </TerminalText>
    </>
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
  box-shadow: 0px 0px 10px 1px #808080;

  background: #1c2024;
`;

const TerminalText = styled.p`
  font-size: 13px;
  font-style: italic;
  margin-top: 5px;
  color: #8d8d8d;
`;

const Anchor = styled.a`
  color: #8d8d8d;
  transition: 0.3s;

  &:hover {
    color: #1c2024;
  }
`;

const Top = styled.div`
  height: 20px;

  border-radius: 6px 6px 0 0;
  padding: 0 5px;
  margin-bottom: 10px;
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

  padding: 20px;

  @media (min-width: 668px) {
    padding: 30px 35px;
  }
`;

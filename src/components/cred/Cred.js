import React from "react";
import styled from "styled-components";
import Lottie from "lottie-react-web";
import animation from "animations/404-space-error.json";

export const Cred = () => {
  return (
    <CreditMainWrapper id="cred">
      <Space></Space>
      <Title>CREDIT</Title>
      <CreditWrapperIcons>
        <Credit>
          Icons by:
          <A
            className="credit-a"
            href="https://www.flaticon.com/authors/dave-gandy"
            title="Dave Gandy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dave Gandy
          </A>
        </Credit>
      </CreditWrapperIcons>
      <CreditSingle>
        Images by:
        <A
          target="_blank"
          rel="noopener noreferrer"
          className="credit-a"
          href="https://unsplash.com/@georgie_cobbs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Georgie Cobbs
        </A>
      </CreditSingle>
      <CreditWrapperLottie>
        <Lottie
          options={{
            animationData: animation,
          }}
          width="250px"
          height="250px"
        />
        <Credit>
          Animation by:
          <A
            className="credit-a"
            href="https://lottiefiles.com/kastnerskasten"
            target="_blank"
            rel="noopener noreferrer"
          >
            Felix Kastner
          </A>
        </Credit>
      </CreditWrapperLottie>
    </CreditMainWrapper>
  );
};
const CreditMainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  margin: auto;
  min-height: 90vh;
  max-width: 375px;
  background: #fff;
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

  @media (min-width: 1024px) {
    font-size: 50px;
  }
`;

const CreditWrapperIcons = styled.div`
  margin: 50px 0;
`;

const Credit = styled.p`
  color: #000;
  font-size: 28px;
  margin: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const A = styled.a`
  color: #000;
  background: $yellow;
  margin-left: 5px;
  max-width: 110px;
  font-weight: 700;
`;

const CreditSingle = styled.p`
  color: $black;
  font-size: 28px;
  margin: 50px 0;
  display: flex;
  align-items: flex-end;
`;

const CreditWrapperLottie = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-self: flex-end;
  margin: 50px 0;
`;

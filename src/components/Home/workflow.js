import React from "react";
import styled from "styled-components";
import { HeaderStyle } from "../../styles/commonStyle";
import { MainQuote } from "../../styles/commonStyle";

const Workflow = () => {
  return (
    <WorkFlowBody>
      <WorkFlowUpper>
        <div>
          <BlackHeaderStyle>MY WORKFLOW</BlackHeaderStyle>

          <WorkMainQuote colorStyle="black">3 easy step</WorkMainQuote>
          <WorkMainQuote colorStyle="red">work with me</WorkMainQuote>
        </div>
      </WorkFlowUpper>
      <WorkBody>
        <h1>
          <Workimg src="../images/phone.png" alt="" />
          discuss &<br /> briefing
        </h1>
        <div>
          <WorkArrow src="../images/arrow1.svg" alt="" />
        </div>
        <h1>
          <Workimg src="../images/keyboard.png" alt="" />i am coding a <br />
          preety website
        </h1>
        <div>
          <WorkArrow
            src="/images/arrow2.svg"
            alt=""
            style={{ rotate: "-50deg" }}
            // style="rotate: -50deg;"
          />
        </div>
        <h1>
          <Workimg src="../images/smile.png" alt="" />
          you happy <br />
          with the website
        </h1>
      </WorkBody>
    </WorkFlowBody>
  );
};

export default Workflow;

const WorkFlowBody = styled.section`
  background-color: rgb(250, 239, 239);
`;

const BlackHeaderStyle = styled(HeaderStyle)`
  color: rgb(39, 39, 39);

  @media (max-width: 425px) {
    font-size: 10px;
    padding-bottom: 30px;
  }
`;

const WorkFlowUpper = styled.div`
  display: flex;
  text-align: center;
  width: auto;
  margin: auto;
  flex-direction: column;
  padding-top: 100px;

  @media (max-width: 768px) {
    padding-top: 60px;
  }
`;

const WorkBody = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: row;
  padding-top: 150px;
  padding-bottom: 200px;

  h1 {
    display: flex;
    width: 50%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-weight: 300;
    color: rgb(59, 59, 59);
  }

  @media (max-width: 1336px) {
    display: flex;
    width: 90%;
    margin: auto;
  }

  @media (max-width: 768px) {
    padding-bottom: 100px;
    h1 {
      font-size: 13px;
    }
  }

  @media (max-width: 425px) {
    padding-top: 60px;

    h1 {
      font-size: 10px;
    }
  }
`;

const Workimg = styled.img`
  width: 70px;
  padding-bottom: 50px;

  @media (max-width: 768px) {
    width: 40px;
    padding-bottom: 20px;
  }

  @media (max-width: 425px) {
    width: 20px;
  }
`;

const WorkArrow = styled.img`
  width: 100px;
  fill: #5c0b0b;

  @media (max-width: 768px) {
    width: 60px;
  }

  @media (max-width: 425px) {
    width: 30px;
  }
`;

const WorkMainQuote = styled(MainQuote)`
  @media (max-width: 425px) {
    padding-top: 0px;
  }
`;

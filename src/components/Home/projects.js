import React from "react";
import styled from "styled-components";
import { MainButn } from "../../styles/commonStyle";
import { HeaderStyle } from "../../styles/commonStyle";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/projects");
  }

  return (
    <ProjectBody>
      <ProjectUpper>
        <ProjectMainQuote>
          <h1>Moments</h1>
          <h2>we capture.</h2>
        </ProjectMainQuote>
        <Context>
          Explore a selection of frontend projects featuring elegant designs and
          user-friendly interfaces.
        </Context>
      </ProjectUpper>
      <Bottom>
        <ProjectLeft>
          <BlackHeader>PROJECT</BlackHeader>
          <Context2>
            Your website is the center of your digital eco-system, like a brick
            and mortar location, the experience matters once a customer enters,
            just as much as the perception they have of you before they walk
            through the door.
          </Context2>
          <div>
            <ProButn onClick={handleClick}>VIEW PROJECT</ProButn>
          </div>
        </ProjectLeft>
        <Right></Right>
      </Bottom>
    </ProjectBody>
  );
};

export default Projects;

const ProjectBody = styled.section`
  display: flex;
  margin: auto;
  background-color: #1b1b1b;
  flex-direction: column;
  padding-top: 100px;
`;

const ProjectUpper = styled.div`
  display: flex;
  width: 70%;
  margin: auto;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 100px;

  @media (max-width: 768px) {
    padding-top: 70px;
  }

  @media (max-width: 425px) {
    width: 90%;
  }
`;

const Context = styled.div`
  font-size: 20px;
  width: 70%;
  font-weight: lighter;
  letter-spacing: 5px;
  line-height: 30px;
  padding-top: 100px;
  text-align: center;
  color: #ffffe3;
  padding-bottom: 100px;
  @media (max-width: 425px) {
    font-size: 15px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;
const Context2 = styled.div`
  font-size: 16px;
  font-weight: lighter;
  padding-top: 100px;
  letter-spacing: 3px;
  padding-bottom: 100px;
  color: #ffffe3;

  @media (max-width: 1336px) {
    font-size: 20px;
  }

  @media (max-width: 1080px) {
    text-align: center;
    font-size: 15px;
  }

  @media (max-width: 425px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

const BlackHeader = styled(HeaderStyle)`
  color: #ffffe3;
  font-size: 50px;
`;

const Bottom = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  flex-direction: row;
  padding-bottom: 150px;

  @media (max-width: 1080px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 425px) {
    padding-bottom: 60px;
  }
`;

const ProjectLeft = styled.div`
  width: 35%;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding-top: 50px;

  @media (max-width: 1080px) {
    padding-top: 0px;
    width: 80%;

    justify-content: center;
    align-items: center;
  }
`;

const Right = styled.div`
  display: flex;
  width: 60%;
  margin: auto;

  @media (max-width: 425px) {
    width: 90%;
  }
`;

const ProButn = styled.button`
  font-size: 13px;
  padding: 20px;
  border-radius: 30px;
  width: 30%;
  background-color: #1b1b1b;
  border-color: #ffffe3;
  color: #ffffe3;
  border: 1px solid #ffffe3;

  &:hover {
    background-color: #ffffe3;
    color: #1b1b1b;
    transition: background-color 0.2s ease-in;
    border-color: #1b1b1b;
    transition-delay: 0.2s;
  }

  @media (max-width: 1336px) {
    width: 130px;
    margin: 0;
    font-size: 10px;
  }

  @media (max-width: 1080px) {
    width: 110px;
    margin: 0;
    font-size: 10px;
  }
`;

const ProjectMainQuote = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 70px;

  h1 {
    font-size: 100px;
    color: #ffffe3;
  }

  h2 {
    font-size: 100px;
    color: #ffffe3;
  }
`;

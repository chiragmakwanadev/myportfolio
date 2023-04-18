import React from "react";
import styled from "styled-components";
import { MainButn, MainQuote } from "../../styles/commonStyle";
import { HeaderStyle } from "../../styles/commonStyle";

const Projects = () => {
  return (
    <ProjectBody>
      <ProjectUpper>
        <div>
          <ProjectMainQuote colorStyle="black">moments</ProjectMainQuote>
          <ProjectMainQuote colorStyle="red">we capture</ProjectMainQuote>
        </div>
        <Context>
          Perfection is achieved not when there is nothing more to add, but
          rather when there is nothing more to take away.
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
            <ProButn type="button" value="VIEW PROJECTS " />
          </div>
        </ProjectLeft>
        <Right>
          <Grid>
            <Grid1 src="../images/project1.jpg" alt="" />
            <img className="grid2" src="../images/project2.jpg" alt="" />
            <img className="grid3" src="../images/project3.jpg" alt="" />
            <img className="grid4" src="../images/project4.jpg" alt="" />
          </Grid>
        </Right>
      </Bottom>
    </ProjectBody>
  );
};

export default Projects;

const ProjectBody = styled.section`
  display: flex;
  margin: auto;
  background-color: rgb(250, 239, 239);
  flex-direction: column;
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
  font-weight: 400;
  padding-top: 100px;
  letter-spacing: 3px;
  padding-bottom: 100px;
  @media (max-width: 425px) {
    font-size: 15px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;
const Context2 = styled.div`
  font-size: 25px;
  font-weight: 400;
  padding-top: 100px;
  letter-spacing: 3px;
  padding-bottom: 100px;

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
  color: rgb(39, 39, 39);
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
  padding-top: 200px;

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1080px) {
    grid-gap: 5px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const Grid1 = styled.img`
  grid-row: span 3;
`;

const ProButn = styled(MainButn)`
  font-size: 15px;
  width: 50%;
  background-color: rgb(250, 239, 239);

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

const ProjectMainQuote = styled(MainQuote)`
  padding-top: 0px;
`;

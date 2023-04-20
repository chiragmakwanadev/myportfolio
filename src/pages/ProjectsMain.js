import React from "react";
import { MainQuote } from "../styles/commonStyle";
import styled from "styled-components";

const Projects1 = () => {
  return (
    <ProjectMain>
      <ProjectUpper>
        <MainQuote colorStyle="white">
          <div>My Projects</div>
        </MainQuote>
        <UpperContext>
          Perfection is achieved not when there is nothing more to add, but
          rather when there is nothing more to take away.
        </UpperContext>
      </ProjectUpper>
      <ProjectBody1>
        <HeaderInfo>Heading info</HeaderInfo>
        <ProImg src="../images/image2/proimg.jpg" alt="" />
        <Info>
          <InfoHead>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            possimus.
          </InfoHead>
          <Projectbutton>➜</Projectbutton>
        </Info>
      </ProjectBody1>
      <ProjectBody2>
        <ProBody2>
          <HeadInfo>Heading info</HeadInfo>
          <ProImg2 src="../images/image2/proimg2.jpg" alt="" />
          <ImgFooter>
            <ProInfo2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. veritatis
              vero!
            </ProInfo2>
            <ProBtn>➜</ProBtn>
          </ImgFooter>
        </ProBody2>
        <ProBody2>
          <HeadInfo>Heading info</HeadInfo>
          <ProImg2 src="../images/image2/proimg3.jpg" alt="" />
          <ImgFooter>
            <ProInfo2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. veritatis
              vero!
            </ProInfo2>
            <ProBtn>➜</ProBtn>
          </ImgFooter>
        </ProBody2>
      </ProjectBody2>
    </ProjectMain>
  );
};

export default Projects1;

const ProjectMain = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  background-color: rgb(27, 27, 27);
  flex-direction: column;
`;

const ProjectUpper = styled.div`
  width: 70%;
  margin: auto;
  text-align: center;
`;

const UpperContext = styled.div`
  color: white;
  padding-top: 50px;
  font-size: 20px;
  font-weight: 100;
  letter-spacing: 5px;
`;

const ProjectBody1 = styled.div`
  display: flex;
  margin: auto;
  width: 90%;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 50px;
  border-bottom: 1px solid white;

  @media (max-width: 425px) {
    width: 80%;
    padding-bottom: 50px;
  }
`;
const ProImg = styled.img`
  width: 80%;
  object-fit: fill;
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: 0px 0px 2px white;

  @media (max-width: 425px) {
    width: 80%;
    height: 250px;
  }
`;
const HeaderInfo = styled.div`
  font-size: 60px;
  font-family: "Abril Fatface";
  color: white;

  @media (max-width: 425px) {
    font-size: 20px;
  }
`;
const Info = styled.div`
  display: flex;
  width: 30%;
  margin-top: 50px;
  justify-content: space-between;

  @media (max-width: 1080px) {
    width: 50%;
  }
  @media (max-width: 425px) {
    width: 90%;
  }
`;
const InfoHead = styled.div`
  width: 50%;
  font-size: 15px;
  letter-spacing: 5px;
  color: white;
  margin-bottom: 50px;

  @media (max-width: 1080px) {
    width: 70%;
    font-size: 13px;
  }

  @media (max-width: 425px) {
    font-size: 10px;
    font-weight: 100;
  }
`;
const Projectbutton = styled.button`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  font-size: 20px;
  color: white;
  background-color: rgb(27, 27, 27);
  border-color: white;

  &:hover {
    color: black;
    background-color: white;
    transition-duration: 0.5s;
    transition-delay: 0.1s;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 15px;
  }
`;

const ProjectBody2 = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  padding-top: 100px;
  padding-bottom: 100px;
  border-bottom: 1px solid white;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
const ProBody2 = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 425px) {
    width: 80%;
    padding-bottom: 50px;
  }
`;
const ProInfo2 = styled.div`
  width: 60%;
  font-size: 15px;
  letter-spacing: 5px;
  color: white;
  font-weight: 100;
  text-align: left;

  @media (max-width: 1080px) {
    width: 80%;
    font-size: 13px;
  }

  @media (max-width: 425px) {
    width: 90%;
    font-size: 10px;
  }
`;

const HeadInfo = styled.div`
  font-family: "Abril Fatface";
  font-size: 30px;
  color: white;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 425px) {
    font-size: 15px;
  }
`;

const ProImg2 = styled.img`
  width: 60%;
  object-fit: cover;
  height: 600px;
  border-radius: 10px;
  box-shadow: 0px 0px 2px white;
  margin-bottom: 30px;

  @media (max-width: 1080px) {
    width: 70%;
    height: 400px;
  }

  @media (max-width: 768px) {
    width: 80%;
    height: 300px;
  }

  @media (max-width: 425px) {
    width: 80%;
    height: 250px;
  }
`;

const ProBtn = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 15px;
  font-weight: 100;
  color: white;
  background-color: rgb(27, 27, 27);
  border-color: white;

  &:hover {
    color: black;
    background-color: white;
    transition-duration: 0.5s;
    transition-delay: 0.1s;
  }
`;

const ImgFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 425px) {
    width: 90%;
  }
`;

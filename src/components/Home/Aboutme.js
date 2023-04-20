import React from "react";
import styled from "styled-components";
import { HeaderStyle } from "../../styles/commonStyle";
import { MainQuote } from "../../styles/commonStyle";

const Aboutme = () => {
  return (
    <AboutBody>
      <AboutLeft>
        <HeaderStyle>ABOUT ME</HeaderStyle>
        <MainQuote colorStyle="white">
          coding
          <br />
          always
          <br />
          has meaning
        </MainQuote>
        <Context>
          Perfection is achieved not when there is nothing more to add, but
          rather when there is nothing more to take away.
        </Context>
        <div>
          <HeaderStyle>MY SPECIALTIES</HeaderStyle>
          <Hashtags>
            <li>DEVELOPER</li>
            <li>GAMER</li>
            <li>AUDIOPHILE</li>
            <li>INTERIOR</li>
            <li>SLACKER</li>
            <li>FOOD</li>
            <li>ARCHITECT</li>
          </Hashtags>
        </div>
      </AboutLeft>

      <AboutRight>
        <SideImg src="images/image2/side1.jpg" alt="" />
      </AboutRight>
    </AboutBody>
  );
};

export default Aboutme;

const AboutBody = styled.section`
  background-color: rgb(27, 27, 27);
  color: white;
  display: flex;
  margin: auto;
  padding-top: 20px;
  align-content: center;

  @media (max-width: 1336px) {
    display: flex;
    flex-direction: column-reverse;
    margin: auto;
    text-align: center;
    width: 100%;
    margin: auto;
  }
`;

const AboutLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 5%;

  @media (max-width: 1336px) {
    width: 90%;
    margin: auto;
    text-align: center;
  }

  @media (max-width: 425px) {
    width: 95%;
  }
`;

const Context = styled.div`
  font-size: 25px;
  font-weight: 100;
  width: 90%;
  display: flex;
  padding-top: 100px;
  line-height: 40px;
  letter-spacing: 6px;

  @media (max-width: 1336px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 20px;
  }

  @media (max-width: 425px) {
    font-size: 15px;
  }
`;

const AboutRight = styled.div`
  width: 90%;
  display: flex;
  margin: auto;
  align-content: center;

  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const SideImg = styled.img`
  width: 600px;
  display: flex;
  margin: auto;
  object-fit: cover;
  margin-top: -140px;
  border-radius: 30px;

  @media (max-width: 1336px) {
    width: 80%;
    height: 550px;
    object-fit: cover;
    margin-top: 200px;
  }
`;
const Hashtags = styled.h2`
  list-style: none;
  text-align: center;
  font-weight: 100;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 100px;
  font-size: 20px;
  flex-wrap: wrap;

  li {
    border: 1px solid white;
    border-radius: 40px;
    padding: 25px;
  }

  @media (max-width: 1336px) {
    padding-top: 70px;
    font-size: 15px;
    width: 50%;
    margin: auto;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 1080px) {
    width: 80%;
    margin: auto;
  }

  @media (max-width: 768px) {
    width: 70%;
    margin: auto;
    font-size: 10px;
    padding-top: 30px;

    li {
      padding: 10px;
    }
  }

  @media (max-width: 425px) {
    width: 80%;
    font-size: 8px;
    li {
      padding: 6px;
    }
  }
`;

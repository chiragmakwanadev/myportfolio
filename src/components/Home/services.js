import React from "react";
import styled from "styled-components";
import { MainQuote } from "../../styles/commonStyle";
import { HeaderStyle } from "../../styles/commonStyle";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <ServiceBody>
      <div>
        <ServiceImg src="../images/side2.jpg" alt="" />
      </div>
      <ServiceRight>
        <MainQuote colorStyle="white">
          the best
          <br />
          service
          <br />
          we
          <br />
          provide
        </MainQuote>
        <ServiceContext>
          when you don't create things, you become defined by your tastes rather
          than ability. your tastes only narrow & exclude people. so create
        </ServiceContext>
        <div>
          <HeaderStyle>MY SERVICES</HeaderStyle>
        </div>

        <ServiceBtn>
          <ServiceLink2>
            <img src="../images/image2/logo101.png" alt="" />
          </ServiceLink2>
          <ServiceLink href="google.com">Projects ➜</ServiceLink>
        </ServiceBtn>
      </ServiceRight>
    </ServiceBody>
  );
};

export default Services;

const ServiceBody = styled.section`
  background-color: rgb(27, 27, 27);
  color: white;
  display: flex;
  margin: auto;
  padding-top: 100px;
  justify-content: center;
  gap: 100px;

  @media (max-width: 1336px) {
    display: flex;
    flex-direction: column;
    margin: auto;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding-top: 50px;
  }
`;

const ServiceImg = styled.img`
  width: 650px;
  height: 1150px;
  display: flex;
  margin: auto;
  object-fit: cover;
  padding-top: 110px;

  @media (max-width: 1336px) {
    width: 80%;
    height: 500px;
    object-fit: cover;
    padding-top: 100px;
  }

  @media (max-width: 768px) {
    margin-bottom: -50px;
  }
`;

const ServiceRight = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 5%;

  @media (max-width: 1336px) {
    width: 60%;
    margin: auto;
    text-align: center;
    top: -100px;
  }
  @media (max-width: 1336px) {
    width: 90%;
  }
`;

const ServiceContext = styled.div`
  font-size: 25px;
  font-weight: 100;
  width: 100%;
  display: flex;
  padding-top: 100px;
  line-height: 40px;
  letter-spacing: 3px;

  @media (max-width: 1336px) {
    width: 100%;
  }
  @media (max-width: 1336px) {
    width: 100%;
    font-size: 20px;
  }
  @media (max-width: 425px) {
    font-size: 15px;
    padding-top: 40px;
  }
`;

const ServiceBtn = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid darkgray;

  line-height: 70px;
  padding-top: 100px;

  img {
    width: 40px;
    margin: auto;
    margin-left: -1px;
    filter: invert(100%) sepia() saturate(10000%) hue-rotate(300deg);
  }

  @media (max-width: 1336px) {
    align-items: center;
    display: flex;
    margin: auto;
  }
  @media (max-width: 425px) {
    img {
      width: 20px;
    }
  }
`;

const ServiceLink = styled(Link)`
  text-decoration: none;
  font-size: 25px;
  font-weight: 100;
  word-spacing: 40px;
  color: white;
  letter-spacing: 5px;
  text-align: end;
  padding-left: 20px;

  @media (max-width: 425px) {
    font-size: 15px;
  }
`;

const ServiceLink2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

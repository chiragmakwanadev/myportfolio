import React from "react";
import styled from "styled-components";
import { MainQuote } from "../../styles/commonStyle";
import { HeaderStyle } from "../../styles/commonStyle";

const Whyme = () => {
  return (
    <WhyMeBody>
      <WhyLeft>
        <BlackHeaderStyle>WHY ME?</BlackHeaderStyle>
        <Flex>
          <WhyMainQuote colorStyle="black">
            make <br /> meaning <br /> in every <br />
          </WhyMainQuote>
          <WhyMainQuote colorStyle="red">Website made</WhyMainQuote>
        </Flex>
      </WhyLeft>
      <WhyRight>
        <WhyImages>
          <BadImg src="../images/bad.jpg" alt="" />
          <Logo1 src="../images/cross-12809.png" alt="" />
          <GoodImg className="goodimage" src="../images/good.webp" alt="" />
          <Logo2 className="whylogo2" src="../images/tick-33828.png" alt="" />
        </WhyImages>
        <WhyContext>
          Your website is the center of your digital eco-system, like a brick
          and mortar location, the experience matters once a customer enters,
          just as much as the perception they have of you before they walk
          through the door.
        </WhyContext>
      </WhyRight>
    </WhyMeBody>
  );
};

export default Whyme;

const WhyMeBody = styled.section`
  background-color: rgb(250, 250, 250);
  display: flex;
  margin: auto;
  padding-top: 150px;

  @media (max-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 425px) {
    padding-top: 10px;
  }
`;

const BlackHeaderStyle = styled(HeaderStyle)`
  color: rgb(39, 39, 39);

  @media (max-width: 425px) {
    font-size: 10px;
    padding-bottom: 20px;
  }
`;

const WhyLeft = styled.div`
  width: 45%;
  margin: auto;
  align-items: center;
  padding-bottom: 200px;

  @media (max-width: 768px) {
    padding-bottom: 140px;
  }
  @media (max-width: 425px) {
    width: 100%;
    padding-bottom: 50px;
  }
`;

const WhyContext = styled.div`
  padding-top: 100px;
  font-size: 25px;
  font-weight: 400;
  letter-spacing: 3px;
  line-height: 35px;

  @media (max-width: 1080px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 425px) {
    font-size: 13px;
    padding-top: 60px;
  }
`;

const WhyRight = styled.div`
  width: 40%;
  margin: auto;
  align-items: center;

  @media (max-width: 1440px) {
    width: 70%;
    padding-bottom: 150px;
  }
  @media (max-width: 1336px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: auto;
  }

  @media (max-width: 425px) {
    padding-bottom: 80px;
  }
`;

const WhyImages = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: 0.1fr 0.1fr;
  grid-row-gap: 3px;
  grid-column-gap: 40px;

  @media (max-width: 1336px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: auto;
    grid-template-rows: 1fr 2fr 1fr 2fr;
    grid-template-columns: 1fr;
    align-items: center;
    align-content: center;
  }

  @media (max-width: 375px) {
    width: 100%;
    margin: auto;
    grid-template-rows: 1fr 2fr 1fr 2fr;
    grid-template-columns: 1fr;
    align-items: center;
    align-content: center;
  }
`;

const GoodImg = styled.img`
  width: 100%;
  height: 240px;
  grid-column: 2/3;
  grid-row: 2/3;
  object-fit: cover;
  box-shadow: 0px 0px 5px 2px rgb(49, 49, 49);
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
    grid-column: 1/2;
    grid-row: 4/5;
    justify-self: center;
  }

  @media (max-width: 425px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 375px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 375px) {
    grid-column: 1/2;
    grid-row: 4/5;
    justify-self: center;
  }
`;

const BadImg = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  grid-column: 1/2;
  grid-row: 2/3;
  box-shadow: 0px 0px 5px 2px rgb(54, 54, 54);
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
  }

  @media (max-width: 425px) {
    width: 150px;
    height: 150px;
    justify-self: center;
  }

  @media (max-width: 375px) {
    width: 120px;
    height: 120px;
    justify-self: center;
    grid-column: 1/2;
    grid-row: 2/3;
  }
`;
const Logo1 = styled.img`
  width: 50px;
  grid-column: 1/2;
  grid-row: 1/2;
  border: 3px solid rgb(255, 0, 0);
  border-radius: 50%;
  padding: 5px;
  background-color: rgb(250, 227, 227);
  opacity: calc(70%);
  justify-self: center;

  @media (max-width: 425px) {
    width: 30px;
  }
`;
const Logo2 = styled.img`
  width: 50px;
  grid-column: 2/3;
  grid-row: 1/2;
  border: 3px solid rgb(17, 161, 4);
  border-radius: 50%;
  padding: 5px;
  background-color: rgb(250, 227, 227);
  opacity: calc(70%);
  justify-self: center;

  @media (max-width: 768px) {
    grid-column: 1/2;
    grid-row: 3/4;
  }

  @media (max-width: 425px) {
    width: 30px;
  }

  @media (max-width: 375px) {
    grid-column: 1/2;
    grid-row: 3/4;
  }
`;

const Flex = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  flex-direction: column;
`;

const WhyMainQuote = styled(MainQuote)`
  @media (max-width: 425px) {
    margin-right: 0px;
    padding-top: 0px;
  }

  @media (max-width: 375px) {
    width: 90%;
  }
`;

import React from "react";
import styled from "styled-components";
import { MainButn, MainQuote } from "../../styles/commonStyle";

const MainPage = () => {
  return (
    <div className="App">
      <HomeMain>
        <Body>
          <div>
            <MainImg src="/images/image2/mainbody2.jpg" alt="" />
          </div>
          <MainBtm>
            <MainPageBtn>LET'S TALK ➜</MainPageBtn>

            <Context>
              an FrontEnd Web Developer based in Surat,Gujarat,India. Currently
              working as a freelancer ... :)
            </Context>
          </MainBtm>
          <TitleCont>
            <MainPageQuote colorStyle="white">
              Capturing
              <br />
              Every
            </MainPageQuote>
            <MainPageQuote colorStyle="black">
              Precious
              <br />
              Moment.
            </MainPageQuote>
          </TitleCont>
        </Body>
      </HomeMain>
    </div>
  );
};

export default MainPage;

const HomeMain = styled.div`
  background-color: rgb(255, 255, 255);
  margin: auto;
  padding-top: 100px;
`;

const Body = styled.div`
  width: 90%;
  margin: auto;
  position: relative;
`;

const MainImg = styled.img`
  width: 100%;
  height: 600px;
  margin: auto;
  align-items: center;
  display: flex;
  object-fit: cover;
  border-radius: 30px;

  @media (max-width: 1336px) {
    height: 500px;
  }

  @media (max-width: 425px) {
    height: 300px;
  }
`;

const MainBtm = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  position: relative;
  align-items: center;
  height: 400px;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column-reverse;
    padding-top: 50px;
  }

  /* @media (max-width: 768px) {
    width: 100%;
    flex-direction: column-reverse;
    margin: auto;
    padding-bottom: 50px;
  } */
`;

const Context = styled.div`
  font-size: 25px;
  width: 30%;
  font-weight: 400;
  position: absolute;
  bottom: 10%;
  right: 12%;

  letter-spacing: 3px;
  line-height: 35px;

  @media (max-width: 1080px) {
    width: 40%;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    width: 80%;
    font-size: 13px;
    position: relative;
    right: auto;
    bottom: auto;
    text-align: center;
  }

  /* @media (max-width: 1080px) {
    width: 50%;
    margin: auto;
    font-size: 20px;
  } */
`;

const MainPageQuote = styled(MainQuote)`
  font-size: 120px;
  line-height: 120px;
  padding-top: 0;
  font-family: "Abril Fatface", cursive;

  @media (max-width: 1336px) {
    font-size: 80px;
    line-height: 80px;
    /* color : ${(props) => props.colorStyle === "white" && "black"} */
  }

  @media (max-width: 768px) {
    font-size: 50px;
    line-height: 50px;
    color: ${(props) => props.colorStyle === "black" && "white"};
  }

  @media (max-width: 425px) {
    font-size: 30px;
    line-height: 30px;
  }
`;

const TitleCont = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0%, -33%);
  left: 12%;

  @media (max-width: 1336px) {
    transform: translate(0%, -38%);
  }

  @media (max-width: 768px) {
    transform: translate(20%, -140%);
  }

  @media (max-width: 425px) {
    transform: translate(5%, -190%);
  }
`;

const MainPageBtn = styled(MainButn)`
  position: absolute;
  left: 12%;
  font-size: 16px;
  bottom: 10%;

  @media (max-width: 1336px) {
    font-size: 10px;
    width: 140px;
    padding: 10px;
  }

  @media (max-width: 1080px) {
    font-size: 10px;
    width: 140px;
  }

  @media (max-width: 768px) {
    position: relative;
    left: auto;
    bottom: auto;
  }
`;

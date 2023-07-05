import React from "react";
import styled from "styled-components";
import Marquee from "../utils/Marquee";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/projects");
  }

  return (
    <AboutMain>
      <AboutBody>
        <Top>
          <AboutIntro data-aos="zoom-out-right">
            Perfection is achieved not when there is nothing more to add, but
            rather when there is nothing more to take away.
          </AboutIntro>
          <button data-aos="zoom-out-left" onClick={handleClick}>
            <h1>Explore !</h1>
          </button>
        </Top>
        <AboutMainQuote>
          <Letter data-aos="zoom-in-left" data-aos-delay="700">
            A
          </Letter>
          <Letter data-aos="zoom-in-left" data-aos-delay="800">
            b
          </Letter>
          <Letter data-aos="zoom-in-left" data-aos-delay="900">
            o
          </Letter>
          <Letter data-aos="zoom-in-left" data-aos-delay="1000">
            u
          </Letter>
          <Letter data-aos="zoom-in-left" data-aos-delay="1100">
            t
          </Letter>
          <Letter data-aos="zoom-in-left" data-aos-delay="1200">
            M
          </Letter>
          <Letter data-aos="zoom-in-left" data-aos-delay="1300">
            e
          </Letter>
        </AboutMainQuote>
      </AboutBody>
      <Bottom>
        <Quote data-aos="fade-down">
          <h1>"Code is like humor. When you have to explain it, it’s bad."</h1>
          <h2>– Cory House</h2>
        </Quote>
        <AboutMe>
          <h1 data-aos="fade-up">Who am i?</h1>
          <h2 data-aos="fade-down">
            Introducing the one and only me, a front-end developer with a knack
            for creating jaw-dropping websites and bringing laughter to the
            digital world. Armed with HTML, CSS, and JavaScript, they weave
            pixels and punchlines to craft visually stunning and hilariously
            functional online experiences. Get ready to LOL and be wowed by my
            web wizardry!
          </h2>
        </AboutMe>
      </Bottom>
      <Marquee />
    </AboutMain>
  );
};

export default About;

const AboutMain = styled.div`
  background-color: rgb(27, 27, 27);
  color: #ffffe3;
  width: 100%;
  margin: auto;
  padding-bottom: 150px;
  padding-top: 30px;

  @media (max-width: 425px) {
    padding-bottom: 70px;
  }
`;

const AboutBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70%;

  button {
    width: 250px;
    height: 250px;
    border-radius: 100%;
    border: 1px solid #297573;
    background-color: #1b1b1b;
    cursor: pointer;
    transition: 2s;

    h1 {
      font-size: 30px;
      color: #ffffe3;
      font-weight: bold;
      transition: 0.5s;
    }

    &:hover {
      background-color: #ffffe3;
      color: #1b1b1b;
      transition: 1s;
      transition-timing-function: linear;
      border-color: #1b1b1b;

      h1 {
        padding-right: 30px;
        font-size: 30px;
        color: black;
        font-weight: bold;
        transition: 0.4s;
        transition-timing-function: linear;
      }
    }
  }
`;

const Letter = styled.span`
  display: inline-block;
  background-image: url(/images/image2/project1.jpg);
  background-size: contain;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-font-smoothing: antialiased;
  background-position: center top;
`;

const AboutMainQuote = styled.h1`
  font-size: 450px;
  font-family: "Exo 2", sans-serif;
  font-weight: bolder;

  color: #ffffe3;
  display: flex;
  /* padding-top: 200px; */

  @media (max-width: 1336px) {
    font-size: 120px;
  }

  @media (max-width: 768px) {
    font-size: 70px;
  }

  @media (max-width: 375px) {
    font-size: 40px;
  }
`;

const AboutIntro = styled.div`
  width: 30%;
  font-size: 13px;
  letter-spacing: 5px;
  text-align: center;

  @media (max-width: 425px) {
    width: 90%;
    font-weight: 200;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 150px;
  align-items: center;
`;
const Quote = styled.div`
  border-left: 2px solid #297573;
  padding-left: 20px;
  h1 {
    font-family: "Dancing Script", cursive;
    font-weight: lighter;
  }
  h2 {
    font-size: 15px;
    font-weight: 400;
    padding-top: 20px;
  }
`;
const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;

  h1 {
    font-size: 150px;
    font-weight: bolder;
  }

  h2 {
    font-size: 20px;
    width: 70%;
    font-weight: lighter;
    letter-spacing: 5px;
    line-height: 30px;
    padding-top: 50px;
    text-align: center;
  }
`;

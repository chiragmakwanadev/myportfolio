import React from "react";
import styled from "styled-components";
import Marquee from "../utils/Marquee";
import { MainQuote } from "../styles/commonStyle";
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
          <AboutIntro>
            Perfection is achieved not when there is nothing more to add, but
            rather when there is nothing more to take away.
          </AboutIntro>
          <button onClick={handleClick}>Explore !</button>
        </Top>
        <AboutMainQuote>AboutMe</AboutMainQuote>
      </AboutBody>
      <Bottom>
        <Quote>
          <h1>"Code is like humor. When you have to explain it, it’s bad."</h1>
          <h2>– Cory House</h2>
        </Quote>
        <AboutMe>
          <h1>Who am i?</h1>
          <h2>
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
  padding-top: 100px;

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
    border: 1px solid #ffffe3;
    background-color: #1b1b1b;
    color: #ffffe3;
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #ffffe3;
      color: #1b1b1b;
      transition: background-color 0.2s ease-in;
      border-color: #1b1b1b;
      transition-delay: 0.2s;
    }
  }
`;

const AboutMainQuote = styled(MainQuote)`
  font-size: 450px;
  font-family: "Exo 2", sans-serif;
  font-weight: bolder;
  padding-top: 200px;
  color: #ffffe3;
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
  padding-top: 400px;
`;
const Quote = styled.div`
  border-left: 1px solid white;
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

import React from "react";
import styled from "styled-components";

import { HeaderStyle, MainQuote } from "../styles/commonStyle";

const About = () => {
  return (
    <AboutMain>
      <AboutBody>
        <AboutMainQuote>About Me</AboutMainQuote>
        <AboutIntro>
          Perfection is achieved not when there is nothing more to add, but
          rather when there is nothing more to take away.
        </AboutIntro>
      </AboutBody>
      <AboutBtm>
        <AboutLeft>
          <img src="../images/image2/about1.jpg" alt="" />
        </AboutLeft>
        <AboutRight>
          <AboutHeaderStyle>MY SPECIALTIES</AboutHeaderStyle>
          <Context>
            Hey there, internet stranger! As a web developer with three years of
            experience, I've spent more time staring at code than I have at the
            sun (which may explain my pale complexion). But don't worry, my
            pasty exterior belies the fact that I'm a web development wizard who
            can create sites so stunning they'll make your eyes water. Of
            course, there are some challenges to this gig. For one, clients who
            want me to add a blinking rainbow background to their site (spoiler
            alert: it's never a good idea). And let's not forget the endless
            cups of coffee required to power me through long nights of
            debugging. But hey, I wouldn't have it any other way. When I'm not
            coding, you can find me at the local coffee shop, debating the
            merits of Comic Sans with my fellow web development nerds. So if
            you're looking for a web developer who's equal parts coding genius
            and comedy gold, look no further. I'm your gal/guy/non-binary person
            (because let's be inclusive, people), and I'm ready to make your
            website sparkle. Let's make some magic happen on the web!
          </Context>
        </AboutRight>
      </AboutBtm>
      <Aboutfooter>
        <Head>SKILLS :</Head>
        <Skills>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>Git</li>
          <li>Vercel</li>
          <li>Figma</li>
        </Skills>
      </Aboutfooter>
    </AboutMain>
  );
};

export default About;

const AboutMain = styled.div`
  background-color: rgb(27, 27, 27);
  color: white;
  width: 100%;
  margin: auto;
  padding-bottom: 150px;

  @media (max-width: 425px) {
    padding-bottom: 70px;
  }
`;

const AboutBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const AboutIntro = styled.div`
  width: 50%;
  font-size: 15px;
  padding-top: 80px;
  letter-spacing: 5px;
  text-align: center;

  @media (max-width: 425px) {
    width: 90%;
    font-weight: 200;
  }
`;

const AboutMainQuote = styled(MainQuote)`
  font-size: 150px;

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
const AboutBtm = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  padding-top: 150px;
  padding-bottom: 40px;

  @media (max-width: 550px) {
    flex-direction: column-reverse;
  }
`;

const AboutHeaderStyle = styled(HeaderStyle)`
  font-weight: 500;
  padding-bottom: 100px;

  @media (max-width: 1080px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    letter-spacing: 10px;
  }

  @media (max-width: 550px) {
    font-size: 13px;
    letter-spacing: 6px;
  }
`;

const AboutRight = styled.div`
  width: 30%;
  margin: auto;

  @media (max-width: 1080px) {
    width: 40%;
  }

  @media (max-width: 550px) {
    width: 90%;
  }
`;

const Context = styled.div`
  font-size: 18px;
  font-weight: 100;
  letter-spacing: 3px;
  width: 100%;

  @media (max-width: 1336px) {
    font-size: 16px;
  }

  @media (max-width: 1080px) {
    font-size: 13px;
    word-spacing: 4px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 550px) {
    font-size: 12px;
  }
`;

const AboutLeft = styled.div`
  width: 50%;
  display: flex;
  margin: auto;
  img {
    width: 70%;
    height: 700px;
    margin: auto;
    object-fit: cover;
    border-radius: 20px;
  }
  @media (max-width: 550px) {
    width: 90%;
    margin-top: 50px;

    img {
      width: 90%;
      height: 300px;
    }
  }
`;

const Aboutfooter = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  padding-top: 20px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
`;

const Head = styled.div`
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 5px;

  @media (max-width: 1080px) {
    font-size: 15px;
  }
`;

const Skills = styled.div`
  list-style: none;
  font-size: 15px;
  font-weight: 100;
  letter-spacing: 5px;
  padding-left: 10px;
  li {
    padding-bottom: 10px;
  }

  @media (max-width: 1080px) {
    font-size: 12px;
  }
`;

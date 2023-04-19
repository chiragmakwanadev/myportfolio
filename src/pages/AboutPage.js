import React from "react";
import styled from "styled-components";
import { HeaderMain } from "../components/Layout/Header";
import { HeaderStyle, MainQuote } from "../styles/commonStyle";

const About = () => {
  return (
    <AboutMain>
      <AboutBody>
        <AboutMainQuote>ABOUT ME</AboutMainQuote>
        <AboutIntro>
          Perfection is achieved not when there is nothing more to add, but
          rather when there is nothing more to take away.
        </AboutIntro>
      </AboutBody>
      <AboutBtm>
        <AboutLeft>
          <img src="../images/about1.jpg" alt="" />
        </AboutLeft>
        <AboutRight>
          <AboutHeaderStyle>MY SPECIALTIES</AboutHeaderStyle>
          <Context>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsa
            perferendis error sunt repudiandae laborum eius sit libero dolore,
            temporibus cum ipsam explicabo similique voluptatibus vero esse
            fugit commodi quam minima blanditiis omnis? Aspernatur unde
            voluptatem facere accusantium aliquid omnis quisquam illo nulla
            magnam, rerum, ipsum saepe! Animi alias odio porro incidunt
            molestias aliquam, earum eligendi laboriosam harum deleniti? Odio
            laudantium enim doloribus!
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

const AboutHeader = styled(HeaderMain)`
  background-color: rgb(27, 27, 27);
  color: white;
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

  @media (max-width: 425px) {
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

  @media (max-width: 425px) {
    font-size: 13px;
    letter-spacing: 6px;
  }
`;

const AboutRight = styled.div`
  width: 40%;
  margin: auto;

  @media (max-width: 425px) {
    width: 90%;
  }
`;

const Context = styled.div`
  font-size: 20px;
  font-weight: 100;
  letter-spacing: 3px;
  width: 100%;

  @media (max-width: 1336px) {
    font-size: 17px;
  }

  @media (max-width: 1080px) {
    font-size: 15px;
    word-spacing: 4px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 425px) {
    font-size: 15px;
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
  @media (max-width: 425px) {
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

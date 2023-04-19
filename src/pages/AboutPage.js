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
            laudantium enim doloribus sit labore laborum magnam, corporis culpa
            adipisci dolore rem. Reprehenderit cum iure incidunt perspiciatis
            provident sequi libero quae voluptatum odit sint perferendis ullam,
            nam nesciunt? Delectus ipsam minus voluptatibus iusto tenetur
            perferendis officia nostrum similique hic. Inventore!
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
`;

const AboutHeader = styled(HeaderMain)`
  background-color: rgb(27, 27, 27);
  color: white;
`;

const AboutMainQuote = styled(MainQuote)`
  font-size: 150px;
`;
const AboutBtm = styled.div`
  display: flex;
  margin: auto;
  padding-top: 150px;
  padding-bottom: 40px;
`;

const AboutHeaderStyle = styled(HeaderStyle)`
  font-weight: 500;
  padding-bottom: 100px;
`;

const AboutRight = styled.div`
  width: 40%;
  margin: auto;
`;

const Context = styled.div`
  font-size: 20px;
  font-weight: 100;
  letter-spacing: 3px;
  width: 80%;
`;

const AboutLeft = styled.div`
  width: 50%;
  display: flex;
  img {
    width: 70%;
    height: 700px;
    margin: auto;
    object-fit: cover;
    border-radius: 20px;
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
`;

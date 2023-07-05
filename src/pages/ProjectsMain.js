import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { dataPro } from "../data/projectdata";
import styled from "styled-components";

const Projects1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <ProjectMain>
      <ProjectUpper>
        <Quote>
          <Letter data-aos="fade-up" data-aos-delay="600">
            P
          </Letter>
          <Letter data-aos="fade-up" data-aos-delay="700">
            r
          </Letter>
          <Letter data-aos="fade-up" data-aos-delay="800">
            o
          </Letter>
          <Letter data-aos="fade-up" data-aos-delay="900">
            j
          </Letter>
          <Letter data-aos="fade-up" data-aos-delay="1000">
            e
          </Letter>
          <Letter data-aos="fade-up" data-aos-delay="1100">
            c
          </Letter>
          <Letter data-aos="fade-up" data-aos-delay="1200">
            t
          </Letter>
          <Letter data-aos="fade-up" data-aos-delay="1300">
            s
          </Letter>
        </Quote>
        <UpperContext data-aos="fade-down" data-aos-delay="2000">
          Welcome to my project page! As a front-end developer, I'm excited to
          showcase a diverse collection of visually stunning websites and
          interactive web applications. Each project reflects my passion for
          crafting engaging user experiences by seamlessly integrating design
          and functionality. Whether you're a developer seeking inspiration or a
          curious visitor, join me on this journey through the captivating world
          of front-end development. Explore the limitless possibilities and
          celebrate the art of creating delightful online experiences. Enjoy
          your visit!
        </UpperContext>
      </ProjectUpper>
      <ProjectBottom data-aos="fade-down" data-aos-delay="800">
        <Carousel
          autoPlay={false}
          animation="slide"
          swipe={true}
          onChange={handleSlideChange}
          indicatorContainerProps={{
            style: {
              zIndex: 999,
              marginTop: "70px", // 5
              textAlign: "center", // 4
              width: {
                xs: 100,
                sm: 200,
                md: 300,
              },
            },
          }}
          navButtonsProps={{
            // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
              backgroundColor: "#1b1b1b",
              borderRadius: 50,
              opacity: 1,
              top: 10,
              width: {
                xs: 100,
                sm: 200,
                md: 300,
              },
            },
          }}
          navButtonsWrapperProps={{
            // Move the buttons to the bottom. Unsetting top here to override default style.
            style: {
              bottom: "0",
              top: "10",
            },
          }}
          NextIcon={<ArrowForwardIosIcon />}
          PrevIcon={<ArrowBackIosNewIcon />}
        >
          {dataPro.map((test, index) => {
            const isActive = index === activeIndex;
            return (
              <>
                <Border key={test.id} className={isActive ? "active" : ""}>
                  <Left data-aos="fade-down" data-aos-delay="1200">
                    <ul>
                      {test.skills.map((skill) => {
                        return <li>{skill}</li>;
                      })}
                    </ul>
                  </Left>
                  <Right>
                    <img src={test.image} alt="" />
                    <h1 data-aos="fade-up">{test.name}</h1>
                    <h3 data-aos="fade-up">{test.info}</h3>
                  </Right>
                  <button data-aos="fade-up">View Porject</button>
                </Border>
              </>
            );
          })}
        </Carousel>
      </ProjectBottom>
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
  width: 100%;
  margin: auto;
  text-align: center;
  justify-content: center;
`;

const UpperContext = styled.div`
  color: #ffffe3;
  margin: auto;
  padding-top: 50px;
  font-size: 20px;
  font-weight: 100;
  letter-spacing: 5px;
  width: 70%;
  padding-top: 200px;
`;

const Quote = styled.h1`
  color: #ffffe3;
  font-size: 500px;
  font-family: "Exo 2", sans-serif;
  display: flex;
  justify-content: center;
`;

const Letter = styled.span`
  display: inline-block;
  background-image: url(/images/image2/mainbody2.jpg);
  background-size: cover;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-font-smoothing: antialiased;
  background-position: center top;
`;

const ProjectBottom = styled.div`
  padding-top: 150px;
  width: 100%;
  margin: auto;
`;

const Border = styled.div`
  width: 90%;
  display: flex;
  margin: auto;
  height: 500px;
  flex-direction: column;
  justify-content: flex-end;

  button {
    z-index: 3;
    width: 12%;
    margin-top: 40px;
    padding: 10px;
    border: 1px solid white;
    border-radius: 30px;
    background-color: transparent;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: white;
      color: black;
    }
  }
`;

const Left = styled.div`
  color: white;
  z-index: 2;
  padding-bottom: 50px;

  ul {
    display: flex;
    flex-direction: row;
    gap: 10px;
    list-style: none;

    li {
      border: 1px solid white;
      padding: 5px 10px;
      border-radius: 40px;
    }
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  color: white;
  gap: 20px;

  img {
    position: absolute;
    width: 100%;
    height: 700px;
    z-index: -999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    opacity: 0.3;
  }
  h1 {
    font-size: 70px;
  }
  h3 {
    font-weight: lighter;
  }
`;

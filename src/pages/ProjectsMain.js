import React from "react";

import styled from "styled-components";

const Projects1 = () => {
  return (
    <ProjectMain>
      <ProjectUpper>
        <Quote>Projects</Quote>
        <UpperContext>
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
`;

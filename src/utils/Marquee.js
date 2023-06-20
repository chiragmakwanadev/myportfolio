import React from "react";
// 1. Importing framer-motion
import { motion } from "framer-motion";
import styled from "styled-components";

// 2. Defining Variants
const marqueeVariants = {
  animate: {
    x: ["1%", "-30%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  return (
    <div>
      <MarqueeWrapper data-aos="fade-up">
        {/* 3. Using framer motion */}
        <Track variants={marqueeVariants} animate="animate">
          <React1>React</React1>
          <Next>Next.js</Next>
          <Java>JavaScript</Java>
          <Type>TypeScript</Type>
          <Html>HTML</Html>
          <Css>CSS</Css>
          <Sanity>Sanity</Sanity>
          <Framer>Framer Motion</Framer>
          <Tail>Tailwind</Tail>
          <Boot>Bootstrap</Boot>
          <Figma>Figma</Figma>
          <Vercel>Vercel</Vercel>
          <Net>Netlify</Net>
          <Git>Github</Git>
          <Slack>Slack</Slack>
          <React1>React</React1>
          <Next>Next.js</Next>
          <Java>JavaScript</Java>
          <Type>TypeScript</Type>
          <Html>HTML</Html>
          <Css>CSS</Css>
          <Sanity>Sanity</Sanity>
          <Framer>Framer Motion</Framer>
          <Tail>Tailwind</Tail>
          <Boot>Bootstrap</Boot>
          <Figma>Figma</Figma>
          <Vercel>Vercel</Vercel>
          <Net>Netlify</Net>
          <Git>Github</Git>
          <Slack>Slack</Slack>
          <React1>React</React1>
          <Next>Next.js</Next>
          <Java>JavaScript</Java>
          <Type>TypeScript</Type>
          <Html>HTML</Html>
          <Css>CSS</Css>
          <Sanity>Sanity</Sanity>
          <Framer>Framer Motion</Framer>
          <Tail>Tailwind</Tail>
          <Boot>Bootstrap</Boot>
          <Figma>Figma</Figma>
          <Vercel>Vercel</Vercel>
          <Net>Netlify</Net>
          <Git>Github</Git>
          <Slack>Slack</Slack>
        </Track>
      </MarqueeWrapper>
    </div>
  );
};

export default Marquee;

const MarqueeWrapper = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 300px;
  overflow: hidden;
  margin-top: 200px;
  background-color: #1b1b1b;
`;

const Track = styled(motion.div)`
  position: absolute;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  gap: 25px;

  h1 {
    margin: 20px 0;
    font-size: 40px;
    border: 1px solid #1b1b1b;
    text-transform: uppercase;
    padding: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const React1 = styled.h1`
  background-image: url("/images/react.jpg");
  background-size: cover;
  height: 249px;
  width: 249px;
  border-radius: 100%;
`;

const Java = styled.h1`
  background-image: url("/images/js.jpg");
  background-size: cover;
  color: transparent;
  border-radius: 40px;
`;

const Type = styled.h1`
  background-image: url("/images/typescript.webp");
  background-size: cover;
  color: transparent;
  border-radius: 20px;
`;
const Html = styled.h1`
  background-image: url("/images/html.jpg");
  background-size: cover;
  border-radius: 100%;
  height: 249px;
  width: 249px;
  color: black;
`;
const Css = styled.h1`
  background-image: url("/images/css.jpg");
  background-size: cover;
  border-radius: 20%;
  height: 249px;
  width: 249px;
`;
const Figma = styled.h1`
  background-image: url("/images/figma.png");
  background-size: cover;
  border-color: orange;
`;
const Sanity = styled.h1`
  background-image: url("/images/sanity.webp");
  background-size: cover;
  color: transparent;
  border-radius: 10%;
`;
const Framer = styled.h1`
  background-image: url("/images/framer.png");
  background-size: cover;
  border-radius: 10px;
`;
const Tail = styled.h1`
  background-image: url("/images/tail.jpg");
  background-size: cover;
  text-shadow: 0 0 3px black, 0 0 5px black;
  border-radius: 100%;
  height: 249px;
  width: 249px;
`;
const Boot = styled.h1`
  background-image: url("/images/boot.jpg");
  background-size: cover;
  text-shadow: 0 0 3px black, 0 0 5px black;
  border-radius: 20px;
`;
const Vercel = styled.h1`
  background-image: url("/images/vercel.png");
  background-size: cover;
  text-shadow: 0 0 3px black, 0 0 5px black;
`;
const Net = styled.h1`
  background-image: url("/images/net.jpg");
  background-size: cover;
  color: transparent;
  border-radius: 10%;
`;
const Git = styled.h1`
  background-image: url("/images/git.png");
  background-size: cover;
  border-radius: 100%;
  height: 249px;
  width: 249px;
`;
const Next = styled.h1`
  background-image: url("/images/next.jpg");
  background-size: cover;
  color: transparent;
`;
const Slack = styled.h1`
  background-image: url("/images/slack.png");
  background-size: cover;
  color: transparent;
  border-radius: 10px;
`;

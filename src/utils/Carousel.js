import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { images } from "../data/CaraImages";

export const Carousel = () => {
  const [width, setWidth] = useState(0);
  const cara = useRef();

  useEffect(() => {
    setWidth(cara.current.scrollWidth - cara.current.offsetWidth);
    console.log(cara.current.scrollWidth, cara.current.offsetWidth);
  }, []);

  return (
    <Wrapper>
      <CarouselWrapper ref={cara}>
        <InnerCarousel drag="x" dragConstraints={{ left: -width, right: 0 }}>
          {images.map((image) => {
            return (
              <Item key={image}>
                <img src={image.image} alt="" />
              </Item>
            );
          })}
        </InnerCarousel>
      </CarouselWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;
const CarouselWrapper = styled(motion.div)`
  height: 100%;
  overflow: hidden;
  cursor: grab;
  border: 1px solid #ffffe3;
  border-radius: 25px;
`;
const InnerCarousel = styled(motion.div)`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 10px;
  padding: 10px;
`;
const Item = styled(motion.div)`
  /* height: 500px;
  min-width: 33%; */
  position: relative;
  width: 300px;
  height: 100%;
  flex-shrink: 0;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 1px solid #ffffe3;
    border-radius: 20px;
    pointer-events: none;
  }

  @media (max-width: 768px) {
  }
`;

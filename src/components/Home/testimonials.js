import React, { useState } from "react";
import { Testimos } from "../../data/testimonialdata";
import styled from "styled-components";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };
  return (
    <Testi>
      <Upper data-aos="fade-down">
        <BlackHeaderStyle>Testimonial</BlackHeaderStyle>
        <TestMainQuote>
          <h1>My happy Clients.</h1>
        </TestMainQuote>
      </Upper>
      <Bottom data-aos="fade-up" data-aos-delay="500">
        <Carousel
          autoPlay={false}
          animation="slide"
          swipe={true}
          onChange={handleSlideChange}
          indicatorContainerProps={{
            style: {
              marginTop: "70px", // 5
              textAlign: "center", // 4
              width: {
                xs: 50,
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
                xs: 50,
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
          {Testimos.map((test, index) => {
            const isActive = index === activeIndex;
            return (
              <Border key={test.id} className={isActive ? "active" : ""}>
                <Context>{test.context}</Context>
                <Footer>
                  <FooterLeft>
                    <img src={test.image} alt="" />
                    <h1>{test.name}</h1>
                  </FooterLeft>
                  <h2>⭐ {test.rating}</h2>
                </Footer>
              </Border>
            );
          })}
        </Carousel>
      </Bottom>
    </Testi>
  );
};

export default Testimonials;

const Testi = styled.section`
  background-color: #1b1b1b;
  padding-bottom: 100px;

  @media (max-width: 768px) {
    padding-bottom: 100px;
  }

  @media (max-width: 425px) {
    padding-bottom: 40px;
  }
`;

const BlackHeaderStyle = styled.h1`
  color: #ffffe3;
  font-family: "Exo 2", sans-serif;
  letter-spacing: 3px;

  @media (max-width: 425px) {
    font-size: 10px;
    padding-bottom: 30px;
  }
  @media (max-width: 425px) {
    padding-top: 10px;
  }

  @media (max-width: 325px) {
    letter-spacing: 10px;
  }
`;

const TestMainQuote = styled.div`
  h1 {
    font-size: 100px;
    color: #ffffe3;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 70px;
    }
  }
`;

const Upper = styled.div`
  display: flex;
  width: 70%;
  margin: auto;
  text-align: center;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Bottom = styled.div`
  padding-top: 150px;
  width: 60%;
  margin: auto;
  @media (max-width: 768px) {
    padding-top: 70px;
    width: 90%;
  }
  @media (max-width: 540px) {
    width: 100%;
  }
`;
const Border = styled.div`
  width: 60%;
  display: flex;
  margin: auto;
  flex-direction: column;

  @media (max-width: 1336px) {
    width: 80%;
  }

  @media (max-width: 1080px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 425px) {
    width: 70%;
  }
`;

const Context = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #ffffe3;
  border-bottom: 1px solid #ffffe3;
  line-height: 40px;
  padding-bottom: 30px;
  text-align: center;
  height: 200px;

  @media (max-width: 1336px) {
    font-size: 16px;
    padding-top: 70px;
    padding-bottom: 40px;
  }

  @media (max-width: 1080px) {
    font-size: 15px;
    height: 200px;
  }

  @media (max-width: 950px) {
    font-size: 13px;
    height: 200px;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 30px;
  }

  @media (max-width: 540px) {
    font-size: 10px;
    font-weight: lighter;
  }

  @media (max-width: 425px) {
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  align-items: center;
  gap: 10px;

  h1 {
    font-size: 20px;
    font-weight: 200;
    letter-spacing: 5px;
    color: #ffffe3;
  }

  img {
    width: 50px;
    border-radius: 50%;
    object-fit: cover;

    @media (max-width: 768px) {
      width: 30px;
    }
  }
`;

const Footer = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  width: 90%;
  padding-top: 20px;
  flex-direction: row;
  align-items: center;
  padding-bottom: 20px;
  transition-delay: 0.2s;

  h2 {
    font-size: 20px;
    font-weight: 500;
    color: #2b2a2a;
    width: 15%;
    color: #ffffe3;

    @media (max-width: 768px) {
      font-size: 10px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 12px;
    }
    h2 {
      font-size: 12px;
    }
  }
  @media (max-width: 425px) {
    h1 {
      font-size: 10px;
    }
    h2 {
      font-size: 10px;
    }
  }
`;

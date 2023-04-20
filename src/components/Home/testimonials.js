import React from "react";

import styled from "styled-components";
import { MainButn, MainQuote } from "../../styles/commonStyle";
import { HeaderStyle } from "../../styles/commonStyle";

const Testimonials = () => {
  return (
    <Testi>
      <Upper>
        <BlackHeaderStyle>TESTIMONIAL</BlackHeaderStyle>
        <div>
          <TestMainQuote colorStyle="black">my happy</TestMainQuote>
          <TestMainQuote colorStyle="red">clients</TestMainQuote>
        </div>
      </Upper>
      <Bottom>
        <Border>
          <div>
            <Logo src="../images/google.png" alt="" />
          </div>
          <Context>
            The layout is very clean, but also kind of bland. It makes you feel
            comfortable with the site because you don't feel overwhelmed by
            information, but the presentation of the site needs to be worked on
            a bit more.
          </Context>
          <Footer>
            <h1>PROFESSIONAL SAGE</h1>
            <h2>⭐ 4.5</h2>
          </Footer>
        </Border>
        <Button>
          <Butn>VIEW ALL ➜</Butn>
        </Button>
      </Bottom>
    </Testi>
  );
};

export default Testimonials;

const Testi = styled.section`
  background-color: rgb(250, 250, 250);
  padding-bottom: 200px;

  @media (max-width: 768px) {
    padding-bottom: 100px;
  }
`;

const BlackHeaderStyle = styled(HeaderStyle)`
  color: rgb(39, 39, 39);

  @media (max-width: 425px) {
    font-size: 10px;
    padding-bottom: 30px;
  }
  @media (max-width: 425px) {
    padding-top: 10px;
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
`;

const Bottom = styled.div`
  padding-top: 150px;

  @media (max-width: 768px) {
    padding-top: 70px;
  }
`;
const Border = styled.div`
  border: 2px solid rgb(215, 215, 215);
  width: 40%;
  display: flex;
  margin: auto;
  flex-direction: column;
  background-color: rgb(215, 215, 215);
  padding: 40px;
  border-radius: 30px;

  @media (max-width: 1336px) {
    width: 70%;
  }
  @media (max-width: 425px) {
    width: 90%;
  }
`;

const Logo = styled.img`
  width: 100px;
  padding-bottom: 50px;

  @media (max-width: 425px) {
    width: 40px;
  }
`;

const Context = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: rgb(49, 49, 49);
  border-bottom: 1px solid rgb(117, 117, 117);
  line-height: 40px;
  padding-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 425px) {
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
  }
`;

const Footer = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  width: 90%;
  padding-top: 40px;

  h1 {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 5px;
    color: #2b2a2a;
  }

  h2 {
    font-size: 20px;
    font-weight: 500;
    color: #2b2a2a;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 15px;
    }
    h2 {
      font-size: 15px;
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

const Button = styled.div`
  display: flex;
  margin: auto;
  width: 40%;
  padding-top: 50px;

  @media (max-width: 1336px) {
    width: 70%;
  }
`;

const Butn = styled(MainButn)`
  padding: 10px;
  font-size: 15px;
  width: 120px;
  background-color: rgb(250, 250, 250);

  @media (max-width: 768px) {
    font-size: 10px;
    width: 100px;
    padding: 5px;
  }
`;

const TestMainQuote = styled(MainQuote)`
  padding-top: 0px;
`;

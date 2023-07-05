import React from "react";
import styled from "styled-components";
import { MainButn } from "../../styles/commonStyle";
import { useState, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.position = "fixed";
    } else {
      document.body.style.position = "";
    }
  }, [isOpen]);

  return (
    <>
      <HomeMain>
        <Body>
          <TitleCont>
            <MainPageQuote data-aos-once="true">
              <Letter data-aos="fade-down" data-aos-delay="600">
                Y
              </Letter>
              <Letter data-aos="fade-down" data-aos-delay="700">
                O
              </Letter>
              <Letter data-aos="fade-down" data-aos-delay="800">
                K
              </Letter>
              <Letter data-aos="fade-down" data-aos-delay="900">
                O
              </Letter>
              <Letter data-aos="fade-down" data-aos-delay="1000">
                S
              </Letter>
              <Letter data-aos="fade-down" data-aos-delay="1100">
                O
              </Letter>
            </MainPageQuote>
          </TitleCont>
          <MainBtm data-aos="fade-up">
            <MainPageBtn onClick={handleClick}>
              <h2>Let's talk</h2>
              <AiOutlineArrowRight
                style={{
                  border: "1px solid #ffffe3",
                  width: "50px",
                  height: "50px",
                  padding: "5px",
                  borderRadius: "100%",
                  color: "black",
                  backgroundColor: "#ffffe3",
                }}
              />
            </MainPageBtn>
            <Context>
              "Hi there! I'm a Surat-based Front-End Web Developer, crafting
              captivating online experiences. Currently freelancing and ready to
              transform your ideas into reality!"
            </Context>
          </MainBtm>
        </Body>
        <AnimatePresence>
          {isOpen && (
            <Body2>
              <ContactBody
                initial={{ opacity: 1, y: 300 }}
                animate={{ opacity: 1, y: -10 }}
                exit={{ opacity: 1, y: 1000 }}
                transition={{ duration: 0.5 }}
              >
                <CloseModalbtn onClick={handleClick}>&times;</CloseModalbtn>
                <ContactHeader data-aos="fade-down" data-aos-delay="600">
                  Contact-Me.
                </ContactHeader>
                <ModalBody>
                  <label data-aos="fade-up" data-aos-delay="600">
                    Name
                  </label>
                  <input
                    data-aos="fade-up"
                    data-aos-delay="700"
                    type="text"
                    placeholder="Name..."
                  />
                  <label data-aos="fade-up" data-aos-delay="800">
                    Email
                  </label>
                  <input
                    data-aos="fade-up"
                    data-aos-delay="900"
                    type="email"
                    placeholder="Email..."
                  />
                  <label data-aos="fade-up" data-aos-delay="1000">
                    Message
                  </label>
                  <textarea data-aos="fade-up" data-aos-delay="1100" />
                  <button
                    data-aos="fade-up"
                    data-aos-delay="1200"
                    onClick={handleClick}
                  >
                    SUBMIT
                  </button>
                </ModalBody>
              </ContactBody>
            </Body2>
          )}
        </AnimatePresence>
      </HomeMain>
    </>
  );
};

export default MainPage;

const HomeMain = styled.div`
  background-color: #1b1b1b;
  margin: auto;
`;

const Body = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ffffe3;
  padding-bottom: 60px;
`;

const MainBtm = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  text-align: left;
  flex-direction: column-reverse;
  padding-top: 70px;

  @media (max-width: 1440px) {
    align-items: center;
    flex-direction: column-reverse;
    padding-top: 50px;
  }

  @media (max-width: 1080px) {
    align-items: center;
    flex-direction: column-reverse;
    padding-top: 20px;
    width: 80%;
  }

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column-reverse;
    margin-top: -150px;
  }

  @media (max-width: 540px) {
    width: 90%;
  }
`;

const Context = styled.div`
  font-size: 16px;
  width: 60%;
  font-weight: lighter;
  color: #ffffe3;
  letter-spacing: 4px;
  line-height: 35px;

  @media (max-width: 1440px) {
    width: 90%;
    text-align: center;
  }

  @media (max-width: 1080px) {
    width: 90%;
    font-size: 12px;
  }

  @media (max-width: 768px) {
    width: 80%;
    font-size: 13px;
  }
`;
const Letter = styled.span`
  display: inline-block;
  background-image: url(/images/image2/project3.jpg);
  background-size: cover;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-font-smoothing: antialiased;
  background-position: center top;
`;

const MainPageQuote = styled.h1`
  font-size: 450px;
  font-family: "Exo 2", sans-serif;
  font-weight: bolder;
  width: 100%;
  display: flex;
  justify-content: center;
  object-fit: cover;

  @media (max-width: 1440px) {
    font-size: 350px;
    line-height: 80px;
  }

  @media (max-width: 1336px) {
    font-size: 250px;
    line-height: 80px;
  }

  @media (max-width: 1080px) {
    font-size: 200px;
    line-height: 80px;
  }

  @media (max-width: 768px) {
    font-size: 120px;
    line-height: 50px;
  }

  @media (max-width: 540px) {
    font-size: 100px;
  }
`;

const TitleCont = styled.div`
  display: flex;
  margin: auto;

  width: 90%;
`;

const MainPageBtn = styled(MainButn)`
  background-color: transparent;
  border: 1px solid transparent;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  width: 15%;
  align-items: center;
  color: #ffffe3;
  cursor: pointer;
  padding: 10px;
  transition: 1s;

  &:hover {
    padding: 10px;
    background-color: transparent;
    color: #ffffe3;
    width: 20%;
    transition: 0.5s;
    transition-timing-function: ease-in-out;
  }

  h2 {
    font-size: 20px;
    letter-spacing: 4px;
  }
  img {
    width: 16px;
  }

  @media (max-width: 1440px) {
    font-size: 10px;
    width: 140px;
    padding: 10px;
  }

  @media (max-width: 1336px) {
    font-size: 10px;
    width: 140px;
    padding: 10px;
  }

  @media (max-width: 1080px) {
    font-size: 10px;
    width: 140px;
  }

  @media (max-width: 768px) {
    position: relative;
    left: auto;
    bottom: auto;
  }
`;

const Body2 = styled.div``;

const ContactBody = styled(motion.div)`
  display: flex;
  position: fixed;
  margin: auto;
  width: 100%;
  padding-top: 50px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #1b1b1b;
  box-shadow: -2px -31px 19px -1px rgba(0, 0, 0, 0.42);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  @media (max-width: 768px) {
    width: 80%;

    right: 10%;
  }
`;

const CloseModalbtn = styled.button`
  display: flex;
  position: relative;
  left: 47%;
  top: 5px;
  padding: 10px;
  color: #ffffe3;
  font-size: 40px;
  background-color: transparent;
  outline: 0;
  border: 0;
  cursor: pointer;

  @media (max-width: 1336px) {
    left: 40%;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 5px;
    bottom: -10px;
  }
`;
const ContactHeader = styled.h1`
  font-size: 100px;
  letter-spacing: 3px;
  color: #ffffe3;

  @media (max-width: 1080px) {
    font-size: 40px;
    padding-bottom: 30px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
const ModalBody = styled.div`
  width: 60%;
  display: flex;
  margin: auto;
  flex-direction: column;
  padding-bottom: 20px;
  align-items: flex-start;
  /* justify-content: center; */

  label {
    padding-bottom: 20px;
    padding-top: 40px;
    letter-spacing: 5px;
    color: #ffffe3;

    @media (max-width: 1336px) {
      padding-bottom: 15px;
    }

    @media (max-width: 768px) {
      font-size: 15px;
      padding-bottom: 15px;
    }
  }

  input,
  textarea {
    display: flex;
    margin: auto;
    width: 100%;
    height: 40px;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    background: transparent;
    color: #ffffe3;
    font-size: 20px;
    outline: 0;
    border-color: #ffffe3;

    @media (max-width: 1080px) {
      width: 70%;
    }
    @media (max-width: 768px) {
      width: 80%;
      font-size: 13px;
      height: 30px;
    }
  }

  button {
    width: 25%;
    font-size: 20px;
    letter-spacing: 4px;
    padding: 15px;
    margin-top: 40px;
    margin-bottom: 50px;
    border-radius: 20px;
    background-color: transparent;
    color: #ffffe3;
    border-width: 1px;
    border-color: #ffffe3;

    &:hover {
      color: black;
      background-color: #ffffe3;
    }

    @media (max-width: 1336px) {
      font-size: 16px;
      width: 30%;
    }

    @media (max-width: 768px) {
      font-size: 15px;
      width: 30%;
    }
  }
`;

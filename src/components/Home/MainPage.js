import React from "react";
import styled from "styled-components";
import { MainButn, MainQuote } from "../../styles/commonStyle";
import { useState } from "react";
import { useEffect } from "react";

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
    <div className="App">
      <HomeMain>
        <Body>
          <TitleCont>
            <MainPageQuote data-aos-once="true">
              <span data-aos="fade-down" data-aos-delay="600">
                Y
              </span>
              <span data-aos="fade-down" data-aos-delay="700">
                O
              </span>
              <span data-aos="fade-down" data-aos-delay="800">
                K
              </span>
              <span data-aos="fade-down" data-aos-delay="900">
                O
              </span>
              <span data-aos="fade-down" data-aos-delay="1000">
                S
              </span>
              <span data-aos="fade-down" data-aos-delay="1100">
                O
              </span>
            </MainPageQuote>
          </TitleCont>
          <MainBtm data-aos="fade-up">
            <MainPageBtn onClick={handleClick}>
              <h2>Let's talk</h2>
              <img src="/images/right.svg" alt="" />
            </MainPageBtn>
            <Context>
              an FrontEnd Web Developer based in Surat,Gujarat,India. Currently
              working as a freelancer ... :)
            </Context>
          </MainBtm>
        </Body>
        {isOpen && (
          <Body2>
            <ContactBody>
              <CloseModalbtn onClick={handleClick}>&times;</CloseModalbtn>
              <ContactHeader>Contact-Me.</ContactHeader>
              <ModalBody>
                <label> Name</label>
                <input type="text" placeholder="Name..." />
                <label>Email</label>
                <input type="email" placeholder="Email..." />
                <label>Message</label>
                <textarea />
                <button onClick={handleClick}>SUBMIT</button>
              </ModalBody>
            </ContactBody>
          </Body2>
        )}
      </HomeMain>
    </div>
  );
};

export default MainPage;

const HomeMain = styled.div`
  background-color: #1b1b1b;
  margin: auto;
  padding-top: 100px;
`;

const Body = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ffffe3;
  padding-bottom: 100px;
`;

const MainBtm = styled.div`
  display: flex;
  width: 50%;
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

  /* @media (max-width: 768px) {
    width: 100%;
    flex-direction: column-reverse;
    margin: auto;
    padding-bottom: 50px;
  } */
`;

const Context = styled.div`
  font-size: 16px;
  width: 60%;
  font-weight: 400;
  color: #ffffe3;
  letter-spacing: 3px;
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

  /* @media (max-width: 1080px) {
    width: 50%;
    margin: auto;
    font-size: 20px;
  } */
`;

const MainPageQuote = styled(MainQuote)`
  font-size: 490px;
  line-height: 120px;
  padding-top: 0;
  font-family: "Exo 2", sans-serif;
  color: #ffffe3;
  font-weight: bolder;
  width: 100%;
  display: flex;
  justify-content: center;

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
  height: 400px;
  padding-top: 100px;
  width: 90%;
`;

const MainPageBtn = styled(MainButn)`
  font-size: 16px;
  background-color: #ffffe3;
  border-radius: 0px;
  border: 1px solid #ffffe3;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  width: 20%;
  align-items: center;
  color: black;
  cursor: pointer;

  h2 {
    font-size: 16px;
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

const Body2 = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(20px);
`;

const ContactBody = styled.div`
  display: flex;
  position: sticky;
  margin: auto;
  width: 30%;
  flex-direction: column;
  align-items: center;
  background-image: url(/images/modal.jpg);
  border: 1px solid #ffffe3;
  border-radius: 20px;
  top: 10%;
  right: 25%;

  @media (max-width: 768px) {
    width: 80%;

    right: 10%;
  }
`;

const CloseModalbtn = styled.button`
  display: flex;
  margin: auto;
  position: relative;
  left: 45%;
  bottom: -10px;
  padding: 10px;
  color: black;
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
  font-size: 70px;
  letter-spacing: 3px;
  color: black;

  @media (max-width: 1080px) {
    font-size: 40px;
    padding-bottom: 30px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
const ModalBody = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
  flex-direction: column;
  padding-bottom: 20px;
  align-items: center;

  label {
    padding-bottom: 20px;
    padding-top: 20px;
    letter-spacing: 5px;
    color: black;

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
    width: 40%;
    height: 40px;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    background: transparent;
    color: black;
    font-size: 20px;
    outline: 0;
    border-color: black;

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
    width: 20%;
    font-size: 15px;
    padding: 5px;
    margin-top: 40px;
    margin-bottom: 50px;
    border-radius: 20px;
    background-color: transparent;
    color: black;
    border-width: 1px;
    border-color: black;

    &:hover {
      background-color: #1b1b1b;
      color: #ffffe3;
      transition: background-color 0.2s ease-in;
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

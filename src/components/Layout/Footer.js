import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MainQuote } from "../../styles/commonStyle";

const Footer = () => {
  return (
    <>
      <FooterMain>
        <Header>
          <div>✻ MORSE'S STUDIO</div>
          <div>
            <div>follow me on:</div>
            <NavLinks>
              <ul>
                <li>
                  <a href="google.com">
                    <img src="../images/insta.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="google.com">
                    <img src="../images/facebook.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="google.com">
                    <img src="../images/skype.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="google.com">
                    <img src="../images/youtube.png" alt="" />
                  </a>
                </li>
              </ul>
            </NavLinks>
          </div>
        </Header>
        <FooterBody>
          <FooterMainQuote colorStyle="white">
            keep in touch with me <br />
            say hi!
          </FooterMainQuote>
          <Email>chirag@aowstudio.dev</Email>
        </FooterBody>
        <FooterBottom>
          <div> &#169; 2021 All Rights Reserved</div>
          <nav>
            <NavBar>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="about">About Me</Link>
                </li>
                <li>
                  <Link to="projects">Project</Link>
                </li>
              </ul>
            </NavBar>
          </nav>
        </FooterBottom>
      </FooterMain>
    </>
  );
};

export default Footer;

const FooterMain = styled.section`
  width: auto;
  margin: auto;
  background-color: rgb(27, 27, 27);
  color: white;
`;

const Header = styled.div`
  display: flex;
  width: 85%;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  padding-top: 100px;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  ul {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  li {
    list-style: none;
  }

  img {
    width: 30px;
    padding-top: 30px;
  }

  @media (max-width: 768px) {
    img {
      width: 20px;
    }
  }
`;

const FooterBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 150px;

  @media (max-width: 425px) {
    padding-top: 50px;
  }
`;

const Email = styled.div`
  font-size: 30px;
  color: lightgray;
  border-bottom: 1px solid white;
  font-weight: 100;
  padding-top: 100px;

  @media (max-width: 425px) {
    font-size: 20px;
  }
`;

const FooterBottom = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 200px;
  padding-bottom: 150px;

  @media (max-width: 768px) {
    padding-bottom: 30px;
  }

  @media (max-width: 425px) {
    width: 90%;
    font-size: 10px;
  }
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  ul {
    display: flex;
    flex-direction: row;
    gap: 50px;

    @media (max-width: 768px) {
      gap: 10px;
    }
  }
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: rgb(131, 131, 131);

    &:hover {
      color: white;
    }
  }
`;

const FooterMainQuote = styled(MainQuote)`
  @media (max-width: 1080px) {
    width: 80%;
  }

  @media (max-width: 425px) {
    font-size: 40px;
  }
`;

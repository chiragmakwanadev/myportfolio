import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
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
      document.body.style.position = "static";
    }
  }, [isOpen]);

  return (
    <HeaderMain currentLocation={location.pathname}>
      <HomeLink data-aos="fade-down" data-aos-delay="1000">
        <Link to="/">MORSE'S STUDIO.</Link>
      </HomeLink>
      <nav>
        <NavBar data-aos="fade-down" data-aos-delay="1000">
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
            <li>
              <Link to="Blogs">Blogs</Link>
            </li>
          </ul>
        </NavBar>
      </nav>
      <HamburgMenu>
        <HamburgerIcon onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </HamburgerIcon>
        {isOpen && (
          <ul>
            <li>
              <Link to="/" onClick={handleClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" onClick={handleClick}>
                About Me
              </Link>
            </li>
            <li>
              <Link to="projects" onClick={handleClick}>
                Project
              </Link>
            </li>
          </ul>
        )}
      </HamburgMenu>
    </HeaderMain>
  );
};

export default Header;

export const HeaderMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 60px;
  font-weight: bolder;
  background-color: #1b1b1b;

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 425px) {
    font-size: 13px;
    padding: 20px;
  }
`;

const HomeLink = styled.div`
  a {
    text-decoration: none;
    color: orangered;
    font-size: 20px;
    font-family: "Gasoek One", sans-serif;
    font-weight: 600;
    color: #ffffe3;
    letter-spacing: 5px;
  }

  @media (max-width: 768px) {
    a {
      font-size: 14px;
    }
  }
`;

const NavBar = styled.ul`
  display: flex;
  margin: auto;
  flex-direction: row;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: rgb(131, 131, 131);
    font-weight: lighter;

    &:hover {
      color: #ffffe3;
    }
  }
`;

const HamburgMenu = styled.div`
  /* position: relative; */
  display: none;
  ul {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 20px;
    background: #1b1b1b;
    backdrop-filter: blur(20px);
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 0 0 2px white;
    z-index: 1;
    list-style: none;
    margin: auto;

    li {
      padding: 20px;
      /* text-align: center; */
      padding-top: 50px;

      a {
        text-decoration: none;
        font-weight: 400;
        letter-spacing: 7px;
        color: white;

        &:hover {
          color: #814141;
        }

        @media (max-width: 768px) {
          font-size: 30px;
        }
      }

      &:last-child {
        border-bottom: none;
      }
    }
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const HamburgerIcon = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 15px;
  height: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 2;
  color: orangered;

  span {
    width: 100%;
    height: 1px;
    background-color: #ffffe3;
    transition: all 0.3s ease-in-out;

    &:first-child {
      transform-origin: top left;

      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "none")};
    }
    &:last-child {
      transform-origin: bottom left;
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "none")};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
      transform: ${({ isOpen }) => (isOpen ? "translateX(20px)" : "none")};
    }
  }

  @media (max-width: 768px) {
    display: flex;
    position: relative;
  }
`;

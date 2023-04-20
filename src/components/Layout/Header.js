import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderMain currentLocation={location.pathname}>
      <div>✻ MORSE'S STUDIO</div>
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
      <HamburgMenu>
        <HamburgerIcon onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </HamburgerIcon>
        {isOpen && (
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
  font-weight: 500;
  background-color: ${(props) =>
    (props.currentLocation === "/about" && "#1B1B1B") ||
    (props.currentLocation === "/projects" && "#1B1B1B")};

  color: ${(props) =>
    (props.currentLocation === "/about" && "white") ||
    (props.currentLocation === "/projects" && "white")};

  @media (max-width: 425px) {
    font-size: 13px;
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
    gap: 50px;
  }
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: rgb(131, 131, 131);

    &:hover {
      color: #814141;
    }
  }
`;

const HamburgMenu = styled.div`
  position: relative;
  display: none;
  ul {
    position: absolute;
    top: 100%;
    right: 40px;
    padding: 10px;
    background-color: #1b1b1b;
    box-shadow: 0 0 2px white;
    z-index: 1;
    list-style: none;
    margin: 0;
    width: 150px;
    border-radius: 5px;

    li {
      padding: 10px;

      a {
        text-decoration: none;
        font-weight: 100;
        letter-spacing: 5px;
        color: white;
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

  span {
    width: 100%;
    height: 1px;
    background-color: #814141;
    transition: all 0.3s ease-in-out;

    &:first-child {
      transform-origin: top left;
    }
    &:last-child {
      transform-origin: bottom left;
    }
    &:first-child {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "none")};
    }
    &:last-child {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "none")};
    }
    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
      transform: ${({ isOpen }) => (isOpen ? "translateX(20px)" : "none")};
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

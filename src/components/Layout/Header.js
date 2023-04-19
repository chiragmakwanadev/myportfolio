import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <HeaderMain currentLocation={location.pathname}>
      <div className="Main-font">✻ MORSE'S STUDIO</div>
      <h2>═</h2>
    </HeaderMain>
  );
};

export default Header;

export const HeaderMain = styled.div`
  width: 100%;
  height: 50px;
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

import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <HeaderMain>
      <div className="Main-font">✻ MORSE'S STUDIO</div>
      <h2>═</h2>
    </HeaderMain>
  );
};

export default Header;

const HeaderMain = styled.div`
  align-self: auto;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 60px;
  font-weight: 500;

  @media (max-width: 425px) {
    font-size: 13px;
  }
`;

import styled from "styled-components";

export const MainButn = styled.button`
  padding: 20px;
  font-size: 25px;
  align-items: flex-end;
  background-color: #1b1b1b;
  color: white;
  border-radius: 40px;

  &:hover {
    background-color: #ffffe3;
    color: black;
    transition-duration: 0.5s;
    transition-delay: 0.1s;
  }

  @media (max-width: 1336px) {
    text-align: center;

    width: 40%;
    margin: auto;
  }
  @media (max-width: 1080px) {
    padding: 10px;
    font-size: 20px;
  }
`;

export const HeaderStyle = styled.div`
  font-size: 25px;
  letter-spacing: 20px;
  padding-top: 70px;
  font-weight: bold;

  @media (max-width: 425px) {
    font-size: 13px;
  }
`;

export const MainQuote = styled.div`
  font-size: 120px;
  padding-top: 50px;
  line-height: 130px;
  font-family: "Abril Fatface";
  color: white;

  @media (max-width: 768px) {
    font-size: 70px;
    line-height: 80px;
  }

  @media (max-width: 425px) {
    font-size: 40px;
    line-height: 50px;
  }
`;

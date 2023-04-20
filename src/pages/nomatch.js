import React from "react";
import styled from "styled-components";

const Nomatch = () => {
  return <ErrorPage>404|page not found ... :D</ErrorPage>;
};

export default Nomatch;

const ErrorPage = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  height: 800px;
  padding-top: 300px;
  justify-content: center;
  font-size: 25px;
  background-color: rgb(27, 27, 27);
  color: white;
`;

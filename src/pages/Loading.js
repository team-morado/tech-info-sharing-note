import React from "react";
import styled from "styled-components";
import Spinner from "../components/Spinner";

const Loading = () => {
  return (
    <LoadingContainer>
      <Spinner />
      <Title>Loading</Title>
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: 500;
  margin-top: 40px;
  text-align: center;
  color: #8465e1;
`;

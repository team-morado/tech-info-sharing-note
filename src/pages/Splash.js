import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, [1000]);
  });
  return (
    <SplashCont>
      <Logo src={process.env.PUBLIC_URL + "images/logo.svg"} />
      <LogoTitle>공유노트</LogoTitle>
    </SplashCont>
  );
};

export default Splash;

const splashAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

const SplashCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  animation: ${splashAnimation} 1s ease-in-out forwards;
  animation-delay: 0.5s;
  background-color: #8465e1;
  z-index: 200;
`;

const Logo = styled.img`
  width: 155px;
`;

const LogoTitle = styled.p`
  font-size: 36px;
  font-weight: 700;
  color: #f6f6f6;
  margin-top: 20px;
`;

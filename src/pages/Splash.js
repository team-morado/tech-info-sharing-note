import React from "react";
import styled from "styled-components";

const Splash = () => {
  return (
    <SplashCont>
      <Logo src={process.env.PUBLIC_URL + 'images/logo.svg'} />
      <LogoTitle>공유노트</LogoTitle>
    </SplashCont>
  );
};

export default Splash;

const SplashCont = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-color: #8465e1;
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

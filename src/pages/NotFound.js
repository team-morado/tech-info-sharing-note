import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "../elements";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <NotFoundCont>
      <ErrorTxt>404</ErrorTxt>
      <SubTxt>서버 주소를 다시 확인해주세요 :(</SubTxt>
      <Button width="125px" _onClick={() => navigate("/home")}>
        이전 페이지
      </Button>
    </NotFoundCont>
  );
};

export default NotFound;

const NotFoundCont = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 200;
`;

const ErrorTxt = styled.p`
  font-size: 110px;
  font-weight: 600;
  letter-spacing: -0.045rem;
  color: #ebe1f6;
`;

const SubTxt = styled.p`
  font-size: 16px;
  letter-spacing: -0.045rem;
  color: #c4c4c4;
  margin: 20px 0;
`;

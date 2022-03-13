import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { NextBtn } from "../elements";
import { ArrowLeft } from "./Svg";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <HeaderCont>
      <HeaderWrap>
        <BtnLink
          type="button"
          onClick={() => navigate(-1)}
          current={location.pathname !== "/home" ? 1 : 0}
        >
          <ArrowLeft />
        </BtnLink>
        <Title><Link to="/home"><img src="/images/header_logo.png" alt="공유노트" /></Link></Title>
      </HeaderWrap>
      <NextBtn />
    </HeaderCont>
  );
};

const HeaderCont = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 0 1.25rem;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 1.25rem;
  font-weight: 700;
  box-sizing: border-box;
  z-index: 100;
`;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 3.75rem;
  svg {
    vertical-align: middle;
  }
`;

const BtnLink = styled.button`
  display: ${(props) => (props.current ? "block" : "none")};
  margin-right: 1rem;
`;

const Title = styled.h1`
  color: #0f1414;
  letter-spacing: -0.045rem;
  img {
    height: 1.875rem;
  }
`;

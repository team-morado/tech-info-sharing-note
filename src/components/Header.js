import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { NextBtn } from "../elements";
import { ArrowLeft } from "./Svg";

export const Header = () => {
  const location = useLocation();
  return (
    <HeaderCont>
      <HeaderWrap>
        <BtnLink to="/" current={location.pathname !== "/"}>
          <ArrowLeft />
        </BtnLink>
        <Title>공유노트</Title>
      </HeaderWrap>
      <NextBtn />
    </HeaderCont>
  );
};

const HeaderCont = styled.header`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  width: 100%;
  height: 60px;
  font-size: 1.25rem;
  font-weight: 700;
`;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const BtnLink = styled(Link)`
  ${(props) => (props.current ? `display: block;` : `display: none;`)}
  margin-left: 1rem;
`;

const Title = styled.h1`
  color: #0f1414;
  margin-left: 0.7rem;
  letter-spacing: -0.045rem;
`;

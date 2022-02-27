import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PrevBtn from "../image/icon-arrow-left.svg"
import EditIcon from "../image/icon-edit.png";


export const HeaderNew = () => {
  return (
    <HeaderCont>
      <HeaderWrap>
        <BtnLink to="/">
          <img src={PrevBtn} />
        </BtnLink>
        <Title>공유노트</Title>
      </HeaderWrap>
    </HeaderCont>
  );
};

export const Header = () => {
  return (
    <HeaderCont>
      <HeaderWrap>
        <BtnLink to="/">
          <img src={PrevBtn} />
        </BtnLink>
        <Title>공유노트</Title>
      </HeaderWrap>

      <Button to="/new">
        <EditImg src={EditIcon} />
        <BtnText>글쓰기</BtnText>
      </Button>
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
  height: 60px;
  background-color: #f2f2f2;
  font-size: 1.25rem;
  font-weight: 700;
  z-index: 100;
`;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const BtnLink = styled(Link)`
  margin-left: 1rem;
`;

const Title = styled.h1`
  color: #0f1414;
  margin-left: 0.7rem;
  letter-spacing: -0.045rem;
`;

const Button = styled(Link)`
  background-color: #8465e1;
  color: #fff;
  cursor: pointer;
  padding: 0.5rem 0.7rem;
  margin-right: 0.7rem;
  border-radius: 4px;
  font-size: 1rem;
`;

const EditImg = styled.img`
  width: 17px;
`;

const BtnText = styled.p`
  float: right;
  margin-left: 0.5rem;
`;

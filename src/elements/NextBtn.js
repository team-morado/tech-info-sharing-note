import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import {EditIcon} from "../components";


const NextBtn = () => {
  const location = useLocation();
  return (
    <Button to="/new" current={location.pathname === "/" ? 1 : 0}>
      <EditIcon />
      <BtnText>글쓰기</BtnText>
    </Button>
  );
};

const Button = styled(Link)`
  display: ${(props) => (props.current ? "flex" : "none")};
  align-items: center;
  background-color: #8465e1;
  color: #fff;
  cursor: pointer;
  padding: 0.3em 0.3rem;
  margin-right: 0.7rem;
  border-radius: 4px;
  font-size: 1rem;
`;

const BtnText = styled.p`
  margin: 0 0.3rem;
  letter-spacing: -0.045rem;
`;

export default NextBtn;

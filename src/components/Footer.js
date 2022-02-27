import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrap>
      <CopyRight>Copyright ©morado. All Rights Reserved.</CopyRight>
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const CopyRight = styled.p`
  font-size: 13px;
  letter-spacing: -0.045rem;
  color: #666;
`;

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
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: #444;
  z-index: 100;
`;

const CopyRight = styled.p`
  color: #fafafa;
  font-size: 0.813rem;
`;

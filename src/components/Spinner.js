import React from "react";
import FadeLoader from "react-spinners/FadeLoader";
import styled from "styled-components";
import { css } from "@emotion/react";

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  position: relative;
  top: 25px;
  left: 32px;
`;

const Spinner = () => {
  return (
    <Flex>
      <FadeLoader
        height="25px"
        width="10px"
        color="#8465E1"
        radius="10px"
        margin="20px"
        css={override}
      />
    </Flex>
  );
};

export default Spinner;

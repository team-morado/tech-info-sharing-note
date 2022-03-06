import React from "react";
import FadeLoader from "react-spinners/FadeLoader";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
      />
    </Flex>
  );
};

export default Spinner;

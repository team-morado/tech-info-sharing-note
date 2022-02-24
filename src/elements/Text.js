import React from 'react';
import styled from "styled-components";

const Text = (props) => {
  const {bold, color, size, children, margin} = props;
  const styles = {bold: bold, color: color, size: size, margin: margin};
  return (
    <TextP {...styles}>
      {children}
    </TextP>
  );
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: '#000000',
  size: '1rem',
  margin: false,
}

const TextP = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  ${(props) => (props.margin ? `margin: ${props.margin}` : '')};
`

export default Text;
import React from "react";
import styled, { css } from "styled-components";

const sizes = {
  medium: {
    width: "347px",
    height: "3.125rem",
    borderRadius: "10px",
    bold: "bold",
    fontSize: "1rem",
  },
  small: {
    width: "76px",
    height: "30px",
    borderRadius: "4px",
    bold: "normal",
    fontSize: "1rem",
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    width: ${(props) => props.width || sizes[size].width};
    height: ${sizes[size].height};
    border-radius: ${sizes[size].borderRadius};
    font-weight: ${sizes[size].bold};
    font-size: ${sizes[size].fontSize};
  `}
`;

const ElButton = styled.button`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  cursor: pointer;
  /* Size */
  ${sizeStyles}
`;

const Button = (props) => {
  const { children, size, _onClick, bg, color, border, ...rest } = props;
  const styles = { size: size, bg: bg, color: color, border: border, ...rest };
  return (
    <>
      <ElButton {...styles} onClick={_onClick}>
        {children}
      </ElButton>
    </>
  );
};

Button.defaultProps = {
  children: null,
  size: "medium",
  bg: "#8465e1",
  color: "#fff",
  border: "transparent",
  _onClick: () => {},
};

export default Button;

import React from "react";
import styled, { css } from "styled-components";

const sizes = {
  medium: {
    width: "100%",
    maxWidth: "347px",
    height: "3.125rem",
    borderRadius: "0.25rem",
    bold: "bold",
    fontSize: "1rem",
    lineHeight: "calc(3.125rem - 2px)",
  },
  small: {
    width: "76px",
    height: "2.25rem",
    borderRadius: "0.25rem",
    bold: "normal",
    fontSize: "1rem",
    lineHeight: "calc(2.25rem - 2px)",
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    width: ${(props) => props.width || sizes[size].width};
    max-width: ${(props) =>  sizes[size].maxWidth || "inherit"};
    height: ${sizes[size].height};
    border-radius: ${sizes[size].borderRadius};
    font-weight: ${sizes[size].bold};
    font-size: ${sizes[size].fontSize};
    line-height: ${sizes[size].lineHeight};
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
  border: "1px solid #8465e1",
  _onClick: () => {},
};

export default Button;

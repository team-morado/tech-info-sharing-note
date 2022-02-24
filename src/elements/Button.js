import React from 'react';
import styled, {css} from "styled-components";

const sizes = {
  medium: {
    width: '347px',
    height: '3.125rem',
    borderRadius: '10px',
    bold: 'bold',
    fontSize: '1rem',
},
  small: {
    width: '76px',
    height: '30px',
    borderRadius: '4px',
    bold: 'normal',
    fontSize: '1rem',
  }
};

const sizeStyles = css`
  ${({ size }) => css`
    width: ${sizes[size].width};
    height: ${sizes[size].height};
    border-radius: ${sizes[size].borderRadius};
    font-weight: ${sizes[size].bold};
    font-size: ${sizes[size].fontSize};
  `}
`;

const ElButton = styled.button`
  background-color: #FDB674;
  color: #fff;
  cursor: pointer;
  
  /* Size */
  ${sizeStyles}
`;

const Button = ({children, size, _onClick}) => {
  return (
    <>
      <ElButton size={size} onClick={_onClick}>{children}</ElButton>

    </>
  );
};

Button.defaultProps = {
  children: null,
  size: 'medium',
  _onClick: () => {},
}


export default Button;


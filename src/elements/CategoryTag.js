import React from 'react';
import styled, {css} from "styled-components";

const types = {
    square: {
        lineHeight: '3.13rem',
        fontSize: '0.875rem',
        borderRadius: "8px",
        marginBottom: "0",
        minWidth: "3.13rem",
        height: "3.13rem",
    },
    long: {
        lineHeight: '1.81rem',
        fontSize: '1rem',
        borderRadius: "15px",
        marginBottom: "24px",
        minWidth: "4.31rem",
        height: "1.81rem",
    }
}

const typeStyles = css`
    ${({type}) => css`
        line-height: ${types[type].lineHeight};
        font-size: ${types[type].fontSize};
        border-radius: ${types[type].borderRadius};
        margin-bottom: ${types[type].marginBottom};
        min-width: ${types[type].minWidth};
        height: ${types[type].height};
    `}
`

const Tag = styled.p`
    display: inline-block;
    text-align: center;
    border: none;
    box-sizing: border-box;
    font-weight: 700;
    color: #000;
    background-color: ${(props) => props.tagColor};
    ${typeStyles}
`

const CategoryTag = (props) => {
    const {children, category, type} = props;
    const styles = {type: type};

    let tagColor = "";
    switch(category){
        case "HTML" :
            tagColor = "#EBE1F6";
            break;
        case "CSS" :
            tagColor = "#D7F5F5";
            break;
        case "JS" :
            tagColor = "#F9E79F";
            break;
        case "React" :
            tagColor = "#5ED3F3";
            break;
        default : // 기타
            tagColor = "#D6DBDF";
            break;
    }

  return (
    <Tag tagColor={tagColor} {...styles}>
      {children}
    </Tag>
  );
};



export default CategoryTag;
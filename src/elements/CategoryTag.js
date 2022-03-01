import React from 'react';
import styled from "styled-components";

const CategoryTag = (props) => {
    const {children, category} = props;
    let tagColor = "";

    if(category === "HTML"){
        tagColor = "#EBE1F6";
    } else if (category === "CSS"){
        tagColor = "#D7F5F5"
    } else if (category === "JS"){
        tagColor = "#F9E79F"
    } else if (category === "React") {
        tagColor = "#5ED3F3"
    } else { // 기타
        tagColor = "#D6DBDF"
    }

  return (
    <Tag tagColor={tagColor}>
      {children}
    </Tag>
  );
};

const Tag = styled.p`
    display: inline-block;
    font-size: 1rem;
    border: none;
    border-radius: 15px;
    padding: 3px 12px;
    margin-bottom: 24px;
    background-color: ${(props) => props.tagColor};
    color: #000;
    font-weight: 500;
`

export default CategoryTag;
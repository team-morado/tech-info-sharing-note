import React from 'react';
import styled from "styled-components";

const ListOption = ({name, value, data, addChecked, removeChecked}) => {
  const checkPlus = (groupName, value) => {
    addChecked(groupName, value);
  }

  const checkMinus = (groupName, value) => {
    removeChecked(groupName, value);
  }

  const onClickCheckbox = (e) => {
    const currentIs = document.querySelector(`input[value=${e.target.value}]`).checked;
    if (currentIs) {
      checkPlus(e.target.name, e.target.value)
    } else {
      checkMinus(e.target.name, e.target.value)
    }
  }

  return (
    <ListOptionItem>
        <input name={name} type="checkbox" id={data} value={value} onClick={onClickCheckbox} />
        <label htmlFor={data}>{value}</label>
    </ListOptionItem>
  );
};

export default ListOption;

const ListOptionItem = styled.li`
  width: 33.3333%;
  padding-right: 1.5rem;
  box-sizing: border-box;
  &:nth-child(3) ~ li {
    margin-top: 1rem;
  }
  input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
  }
  label {
    position: relative;
    display: inline-block;
    min-height: 1.8rem;
    padding-top: .25rem;
    padding-left: 1.625rem;
    font-size: 1rem;
    line-height: 1.3;
    letter-spacing: -0.045rem;
    word-break: break-all;
    box-sizing: border-box;
    ::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: .4rem;
      width: 1rem;
      height: 1rem;
      border: 2px solid #ddd;
      border-radius: 0.125rem;
      box-sizing: border-box;
    }
  }
  input:checked + label {
    ::before {
      background-color: #8465e1;
      border-color: #8465e1;
    }
  }
`
import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import {Button, Text} from "../elements"


const New = ({ onCreate }) => {
  const navigate = useNavigate();

  const authorRef = useRef();
  const titleRef = useRef();
  const categoryRef = useRef();
  const urlRef = useRef();
  const contentRef = useRef();

  const [state, setState] = useState({
    author: "",
    title: "",
    category: "",
    url: "",
    content: "",
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (authorRef.current.value.length < 1) {
      authorRef.current.focus();
      return;
    }

    if (titleRef.current.value.length < 3) {
      titleRef.current.focus();
      return;
    }

    if (categoryRef.current.value.length < 1) {
      categoryRef.current.focus();
      return;
    }

    if (urlRef.current.value.length < 5) {
      urlRef.current.focus();
      return;
    }

    if (contentRef.current.value.length < 5) {
      contentRef.current.focus();
      return;
    }

    onCreate(
      state.author,
      state.title,
      state.category,
      state.url,
      state.content
    );
    alert("저장 성공");
    navigate("/");
  };

  return (
    <ElMain>
      <ElDiv>
        <Text margin="13px 0 11px 0">작성자</Text>
        <ElSelect
          name="author"
          value={state.author || ""}
          onChange={handleChangeState}
          ref={authorRef}
        >
          <option key="default-empty" hidden />
          <option value="효순">효순</option>
          <option value="미진">미진</option>
          <option value="규민">규민</option>
          <option value="다님">다님</option>
          <option value="지윤">지윤</option>
        </ElSelect>
      </ElDiv>

      <ElDiv>
        <Text margin="0 0 11px 0">제목</Text>
        <ElInput
          type="text"
          ref={titleRef}
          value={state.title}
          onChange={handleChangeState}
          name="title"
          placeholder="제목을 입력해주세요."
        />
      </ElDiv>

      <ElDiv>
        <Text margin="0 0 11px 0">카테고리</Text>
        <ElSelect
          name="category"
          value={state.category}
          onChange={handleChangeState}
          ref={categoryRef}
        >
          <option key="default-empty" hidden />
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JS">JS</option>
          <option value="React">React</option>
        </ElSelect>
      </ElDiv>

      <ElDiv>
        <Text margin="0 0 11px 0">공유할 링크(URL)</Text>
        <ElInput
          type="text"
          ref={urlRef}
          value={state.url}
          onChange={handleChangeState}
          name="url"
          placeholder="URL을 입력해주세요."
        />
      </ElDiv>

      <ElDiv>
        <Text margin="0 0 11px 0">공유하고 싶은 이유 or 상세정보</Text>
        <ElTextarea
          ref={contentRef}
          value={state.content}
          onChange={handleChangeState}
          name="content"
        />
      </ElDiv>

      <Button size="medium" _onClick={handleSubmit}>
        작성완료
      </Button>

    </ElMain>
  );
};

export default New;

const ElMain = styled.main`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-left: 3%;
  padding-right: 3%;
`;

const ElDiv = styled.div`
  margin-bottom: 19px;
`;

const ElInput = styled.input`
  background-color: #f9f9f9;
  width: 337px;
  height: 40px;
  border-radius: 4px;
  padding-left: 1rem;
  &:focus {
    outline: 1px solid #8465e1;
  }
`;

const ElSelect = styled.select`
  width: 337px;
  height: 40px;
  border-radius: 4px;
  padding-left: 1rem;
  background: #f9f9f9 url(${process.env.PUBLIC_URL + 'images/icon-arrow-down.svg'}) no-repeat 95% 50%;

  &:focus {
    outline: 1px solid #8465e1;
  }
`;

const ElTextarea = styled.textarea`
  background-color: #f9f9f9;
  width: 337px;
  height: 10rem;
  border-radius: 4px;
  padding: 1rem;
  &:focus {
    outline: 1px solid #8465e1;
  }
`;
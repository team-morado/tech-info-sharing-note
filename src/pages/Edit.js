import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {Button, Text} from "../elements";
import styled from "styled-components";

const Edit = () => {
  const navigate = useNavigate();
  const params = useParams();
  const techInfo_index = params.index;
  const techInfo_list = useSelector((state) => state.techInfo.list);


  return (
    <ElMain>
      <p>{techInfo_list[techInfo_index].author}</p>
      <ElDiv>
        <Text margin="13px 0 11px 0">작성자</Text>
        <ElSelect
          name="author"


        >
          <option key="default-empty" hidden/>
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



          name="title"
          placeholder="제목을 입력해주세요."
        />
      </ElDiv>

      <ElDiv>
        <Text margin="0 0 11px 0">카테고리</Text>
        <ElSelect
          name="category"



        >
          <option key="default-empty" hidden/>
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



          name="url"
          placeholder="URL을 입력해주세요."
        />
      </ElDiv>

      <ElDiv>
        <Text margin="0 0 11px 0">공유하고 싶은 이유 or 상세정보</Text>
        <ElTextarea



          name="content"
        />
      </ElDiv>

      <Button size="medium" _onClick={() => {}}>
        작성완료
      </Button>

    </ElMain>
  );
};

export default Edit;

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
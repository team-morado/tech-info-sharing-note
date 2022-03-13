import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {Button, Text} from "../elements";
import styled from "styled-components";
import {updateTechInfoFB} from "../shared/redux/modules/techInfo";

const Edit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const techInfo_index = params.index;
  const techInfo_list = useSelector((state) => state.techInfo.list);

  const authorRef = useRef();
  const titleRef = useRef();
  const categoryRef = useRef();
  const urlRef = useRef();
  const contentRef = useRef();

  const [state, setState] = useState({
    id: techInfo_list[techInfo_index].id,
    author: techInfo_list[techInfo_index].author,
    title: techInfo_list[techInfo_index].title,
    category: techInfo_list[techInfo_index].category,
    url: techInfo_list[techInfo_index].url,
    content: techInfo_list[techInfo_index].content,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onEdit = () => {
    const editItem = {
      id: techInfo_list[techInfo_index].id,
      author: authorRef.current.value,
      title: titleRef.current.value,
      category: categoryRef.current.value,
      url: urlRef.current.value,
      content: contentRef.current.value,
      created_date: techInfo_list[techInfo_index].created_date,
    };
    dispatch(updateTechInfoFB(editItem));
    navigate(-1);
  };

  return (
    <ElMain>
      <ElDiv>
        <Text>작성자</Text>
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
        <Text>제목</Text>
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
        <Text>카테고리</Text>
        <ElSelect
          name="category"
          value={state.category}
          onChange={handleChangeState}
          ref={categoryRef}
        >
          <option key="default-empty" hidden/>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JS">JS</option>
          <option value="React">React</option>
        </ElSelect>
      </ElDiv>

      <ElDiv>
        <Text>공유할 링크(URL)</Text>
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
        <Text>공유하고 싶은 이유 or 상세정보</Text>
        <ElTextarea
          ref={contentRef}
          value={state.content}
          onChange={handleChangeState}
          name="content"
        />
      </ElDiv>

      <Button size="medium" _onClick={onEdit}>
        수정하기
      </Button>
    </ElMain>
  );
};

export default Edit;

const ElMain = styled.div`
  padding: 1.875rem 1.25rem;
  box-sizing: border-box;
  & > button {
    display: block;
    margin: 0 auto;
  }
`;

const ElDiv = styled.div`
  margin-bottom: 1.25rem;
  input, select, textarea{
    width: 100%;
    margin-top: 0.625rem;
    border-radius: 0.25rem;
  } 
`;

const ElInput = styled.input`
  height: 40px;
  background-color: #f9f9f9;
  padding-left: 1rem;
  &:focus {
    outline: 1px solid #8465e1;
  }
`;

const ElSelect = styled.select`
  height: 40px;
  padding-left: 1rem;
  background: #f9f9f9 url(${process.env.PUBLIC_URL + 'images/icon-arrow-down.svg'}) no-repeat right 1rem top 50%;

  &:focus {
    outline: 1px solid #8465e1;
  }
`;

const ElTextarea = styled.textarea`
  background-color: #f9f9f9;
  height: 10rem;
  padding: 1rem;
  &:focus {
    outline: 1px solid #8465e1;
  }
`;
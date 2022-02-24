import React, {useState, useRef} from 'react';
import {useNavigate} from "react-router-dom"

const New = ({onCreate}) => {
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
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorRef.current.focus();
      return;
    }

    if (state.title.length < 3) {
      titleRef.current.focus();
      return;
    }

    if (state.category.length < 1) {
      categoryRef.current.focus();
      return;
    }

    if (state.url.length < 5) {
      urlRef.current.focus();
      return;
    }

    if (state.content.length < 5) {
      contentRef.current.focus();
      return;
    }


    onCreate(state.author, state.title, state.category, state.url, state.content);
    alert("저장 성공");
    setState({
      author: "",
      title: "",
      category: "",
      url: "",
      content: "",
    })
    navigate('/')
  };

  return (
    <section>
      <div>
        <span>작성자</span>
        <select
          name="author"
          value={state.author || ''}
          onChange={handleChangeState}
          ref={authorRef}
        >
          <option key="default-empty" hidden />
          <option value="효순">효순</option>
          <option value="미진">미진</option>
          <option value="규민">규민</option>
          <option value="다님">다님</option>
          <option value="지윤">지윤</option>
        </select>
      </div>

      <div>
        <span>제목</span>
        <input
          type="text"
          ref={titleRef}
          value={state.title}
          onChange={handleChangeState}
          name="title"
          placeholder="제목을 입력해주세요."
        />
      </div>

      <div>
        <span>카테고리</span>
        <select
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
        </select>
      </div>

      <div>
        <span>공유할 링크(URL)</span>
        <input
          type="text"
          ref={urlRef}
          value={state.url}
          onChange={handleChangeState}
          name="url"
          placeholder="URL을 입력해주세요."
        />
      </div>

      <div>
        <span>공유하고 싶은 이유 or 상세정보</span>
        <textarea
          ref={contentRef}
          value={state.content}
          onChange={handleChangeState}
          name="content"
          placeholder="공유하고 싶은 내용을 입력해주세요."
        />
      </div>

      <button onClick={handleSubmit}>저장하기</button>
    </section>
  );
};

export default New;
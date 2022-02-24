import React from 'react';
import {useNavigate} from "react-router-dom"

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      홈 화면입니다.
      <div>
        <button onClick={() => {navigate("/new")}}>글쓰기</button>
        <button onClick={() => {navigate("/view")}}>게시글이동</button>
      </div>
    </div>
  );
};

export default Home;

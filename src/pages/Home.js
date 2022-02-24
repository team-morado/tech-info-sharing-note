import React from 'react';
import {useNavigate} from "react-router-dom"

const Home = ({dataList}) => {
  const navigate = useNavigate();

  return (
    <div>
      홈 화면입니다.
      <div>
        <button onClick={() => {navigate("/new")}}>글쓰기</button>
      </div>
    </div>
  );
};

export default Home;

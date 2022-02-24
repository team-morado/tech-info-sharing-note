import React from 'react';
import { useNavigate } from "react-router-dom"
import ListItem from "../components/ListItem"

const Home = ({ dataList }) => {
  const navigate = useNavigate();

  return (
    <div>
      홈 화면입니다.
      {
        dataList.map((it) => {
          return (
            <ListItem {...it} />
          )
        })
      }
      <div>
        <button onClick={() => { navigate("/new") }}>글쓰기</button>
      </div>
    </div>
  );
};

export default Home;

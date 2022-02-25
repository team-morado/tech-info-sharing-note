import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ListItem from "../components/ListItem";

const Home = ({ dataList }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div>
        <button
          onClick={() => {
            navigate("/new");
          }}
        >
          글쓰기
        </button>
        <button
          onClick={() => {
            navigate("/view");
          }}
        >
          게시글이동
        </button>
      </div>
      {dataList.map((it) => {
        return <ListItem key={it.id} {...it} />;
      })}
      <Footer />
    </div>
  );
};

export default Home;

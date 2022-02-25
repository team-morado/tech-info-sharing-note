import React from "react";
import ListItem from "../components/ListItem";

const Home = ({ dataList }) => {

  return (
    <div>
      {dataList.map((it) => {
        return <ListItem key={it.id} {...it} />;
      })}
    </div>
  );
};

export default Home;
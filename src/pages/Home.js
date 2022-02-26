import React from "react";
import ListItem from "../components/ListItem";
import ListOptionGroup from "../components/ListOptionGroup";

const Home = ({ dataList }) => {

  return (
    <div>
      <ListOptionGroup />
      {dataList.map((it) => {
        return <ListItem key={it.id} {...it} />;
      })}
    </div>
  );
};

export default Home;
import React from "react";
import {useSelector} from "react-redux"

import ListItem from "../components/ListItem";
import ListOptionGroup from "../components/ListOptionGroup";

const Home = () => {
  const dataList = useSelector((state) => state.techInfo.list);
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
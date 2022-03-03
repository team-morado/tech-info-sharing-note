import React from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux"

import {ListItem, ListOptionGroup} from "../components";

const Home = () => {
  const navigate = useNavigate();
  const techInfo_list = useSelector((state) => state.techInfo.list);

  return (
    <div>
      <ListOptionGroup />
      {
        techInfo_list.map((it, index) => <ListItem key={it.id} {...it} _onClick={() => {navigate('/view/' + index)}} />)
      }
    </div>
  );
};

export default Home;